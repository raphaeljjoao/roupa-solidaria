import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ClothingListComponent } from '../app/clothing-list/clothing-list.component';
import { ClothingItemService } from '../service/clothing-item.service';
import { GenderChoices, SeasonChoices, SizeChoices } from '../enum/Clothing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClothingListComponent', () => {
  let component: ClothingListComponent;
  let fixture: ComponentFixture<ClothingListComponent>;
  let clothingItemServiceSpy: jasmine.SpyObj<ClothingItemService>;



  const item1 = { id: 1, description: 'Camisa Vermelha', size: SizeChoices.Medium, color: 'Red', gender: GenderChoices.Male, season: SeasonChoices.Summer, createdAt: new Date(), updatedAt: new Date(), donor_id: 1 };
  const item2 = { id: 2, description: 'Calça Jeans', size: SizeChoices.Large, color: 'Blue', gender: GenderChoices.Female, season: SeasonChoices.Winter, createdAt: new Date(), updatedAt: new Date(), donor_id: 1 };

  const mockItems = [item1, item2];

  beforeEach(() => {
    const clothingItemServiceMock = jasmine.createSpyObj('ClothingItemService', ['getClothingItems']);

    TestBed.configureTestingModule({
      imports: [ClothingListComponent, BrowserAnimationsModule],
      providers: [{ provide: ClothingItemService, useValue: clothingItemServiceMock }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ClothingListComponent);
    component = fixture.componentInstance;
    clothingItemServiceSpy = TestBed.inject(ClothingItemService) as jasmine.SpyObj<ClothingItemService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch clothing items on init', () => {

    clothingItemServiceSpy.getClothingItems.and.returnValue(of(mockItems));

    component.ngOnInit();

    expect(clothingItemServiceSpy.getClothingItems).toHaveBeenCalled();
    expect(component.clothingItems).toEqual(mockItems);
  });

  it('should apply styles for the clothing list container', () => {
    const listElement: HTMLElement = fixture.nativeElement.querySelector('#list');
    expect(listElement).toBeTruthy();
    const style = window.getComputedStyle(listElement);
    expect(style.display).toBe('flex');
    expect(style.justifyContent).toBe('space-evenly');
  });
});
