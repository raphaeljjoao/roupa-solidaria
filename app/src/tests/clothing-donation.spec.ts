import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClothingItemService } from '../service/clothing-item.service';
import { GenderChoices, SeasonChoices, SizeChoices } from '../enum/Clothing';
import { ClothingItem } from '../models/ClothingItem';
import { Environment } from '../app/environment/environment';

describe('ClothingItemService', () => {
  let service: ClothingItemService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClothingItemService],
    });

    service = TestBed.inject(ClothingItemService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all clothing items', () => {
    const mockClothingItems: ClothingItem[] = [
      new ClothingItem(1, new Date(), new Date(), 1, 'Red Shirt', 'Red', GenderChoices.Male, SizeChoices.Medium, SeasonChoices.Summer),
      new ClothingItem(2, new Date(), new Date(), 1, 'Blue Jeans', 'Blue', GenderChoices.Female, SizeChoices.Large, SeasonChoices.Winter)
    ];

    service.getClothingItems().subscribe(items => {
      expect(items.length).toBe(2);
      expect(items).toEqual(mockClothingItems);
    });

    const req = httpMock.expectOne(`${Environment.url}clothing/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockClothingItems);
  });

  it('should retrieve a clothing item by id', () => {
    const mockClothingItem: ClothingItem = new ClothingItem(1, new Date(), new Date(), 1, 'Red Shirt', 'Red', GenderChoices.Male, SizeChoices.Medium, SeasonChoices.Summer);

    service.getClothingItemById(1).subscribe(item => {
      expect(item).toEqual(jasmine.objectContaining(mockClothingItem));
    });
    const req = httpMock.expectOne(`${Environment.url}clothing/1/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockClothingItem);
  });

  it('should create a new clothing item', () => {
    const newClothingItem: ClothingItem = {
      id: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      donor_id: 1,
      description: 'Green Dress',
      color: 'Green',
      gender: GenderChoices.Female,
      size: SizeChoices.Small,
      season: SeasonChoices.Spring
    };

    service.createClothingItem(newClothingItem).subscribe(response => {
      expect(response.id).toBeDefined();
    });

    const req = httpMock.expectOne(`${Environment.url}clothing/`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newClothingItem);
    req.flush({ id: 123 });
  });

  it('should update an existing clothing item', () => {
    const updatedClothingItem = {
      id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      donor_id: 1,
      description: 'Updated Shirt',
      color: 'Black',
      gender: GenderChoices.Male,
      size: SizeChoices.Large,
      season: SeasonChoices.Winter
    };

    service.updateClothingItem(1, updatedClothingItem).subscribe(response => {
      expect(response.id).toBe(1);
    });

    const req = httpMock.expectOne(`${Environment.url}clothing/1/`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedClothingItem);
    req.flush({ id: 1 });
  });

  it('should delete a clothing item', () => {
    service.deleteClothingItem(1).subscribe(response => {
      expect(response.message).toBe('Deleted successfully');
    });

    const req = httpMock.expectOne(`${Environment.url}clothing/1/`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ message: 'Deleted successfully' });
  });
});
