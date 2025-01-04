import { GenderChoices, SeasonChoices, SizeChoices } from "../enum/Clothing";
import { BaseModel } from "./BaseModel";
import { User } from "./User";

export class ClothingItem extends BaseModel {
  donor: User;
  description: string;
  color: string;
  gender: GenderChoices;
  size: SizeChoices;
  season: SeasonChoices;

  constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    donor: User,
    description: string,
    color: string,
    gender: GenderChoices,
    size: SizeChoices,
    season: SeasonChoices
  ) {
    super(id, createdAt, updatedAt);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.donor = donor;
    this.description = description;
    this.color = color;
    this.gender = gender;
    this.size = size;
    this.season = season;
  }
}
