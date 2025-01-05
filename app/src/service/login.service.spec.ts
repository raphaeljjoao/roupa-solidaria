import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { User } from '../models/User';
import { Environment } from '../app/environment/environment';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  let mockUser: User;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });

    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);

    mockUser = {
      id: 1,
      username: 'testuser'
    } as User;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user data when getUser is called', () => {
    const userId = 1;

    service.getUser(userId).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${Environment.url}user/${userId}/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('should handle error when the HTTP request fails', () => {
    const userId = 1;
    const errorMessage = 'User not found';

    service.getUser(userId).subscribe(
      () => fail('should have failed with a 404 error'),
      (error) => {
        expect(error.status).toBe(404);
        expect(error.statusText).toBe('Not Found');
      }
    );

    const req = httpMock.expectOne(`${Environment.url}user/${userId}/`);
    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });
});
