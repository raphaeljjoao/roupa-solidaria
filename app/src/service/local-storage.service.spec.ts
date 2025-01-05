import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';
import { User } from '../models/User';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let user: User;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
    user = { id: 1, username: 'testuser' } as User;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store user_id in localStorage on login', () => {
    spyOn(localStorage, 'setItem');

    service.login(user);

    expect(localStorage.setItem).toHaveBeenCalledWith('user_id', '1');
  });

  it('should remove user_id from localStorage on logout', () => {
    spyOn(localStorage, 'removeItem');

    service.logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('user_id');
  });

  it('should return user_id from localStorage when logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('1');

    const userId = service.getLoggedUserId();

    expect(userId).toBe(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('user_id');
  });

  it('should return null if no user_id is found in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const userId = service.getLoggedUserId();

    expect(userId).toBeNull();
    expect(localStorage.getItem).toHaveBeenCalledWith('user_id');
  });
});
