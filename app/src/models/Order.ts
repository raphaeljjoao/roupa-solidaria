import { OrderStatus } from "../enum/Order";
import { BaseModel } from "./BaseModel";
import { ClothingItem } from "./ClothingItem";
import { User } from "./User";

export class Order extends BaseModel {
  beneficiary: User;
  clothingItem: ClothingItem;
  status: OrderStatus;

  constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    beneficiary: User,
    clothingItem: ClothingItem,
    status: OrderStatus
  ) {
    super(id, createdAt, updatedAt);
    this.beneficiary = beneficiary;
    this.clothingItem = clothingItem;
    this.status = status;
  }
}
