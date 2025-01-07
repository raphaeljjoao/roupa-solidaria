import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Environment } from '../app/environment/environment';
import { LoginService } from '../service/login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });

    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a user by ID', () => {
    const mockUser = {
      id: 7,
      username: 'johndoe',
      email: 'johndoe@example.com',
      password: 'password',
      cpf: '12345678900',
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      preferences: {},
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    service.getUser(7).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${Environment.url}user/7/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });
});
