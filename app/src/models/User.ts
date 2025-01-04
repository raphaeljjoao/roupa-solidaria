import { BaseModel } from "./BaseModel";

export class User extends BaseModel {
  username: string;
  email: string;
  password: string;
  cpf: string;
  firstName: string;
  lastName: string;
  address: string;
  preferences: object;

  constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    username: string,
    email: string,
    password: string,
    cpf: string,
    firstName: string,
    lastName: string,
    address: string,
    preferences: object
  ) {
    super(id, createdAt, updatedAt);
    this.username = username;
    this.email = email;
    this.password = password;
    this.cpf = cpf;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.preferences = preferences;
  }

}
