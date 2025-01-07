import { GenderChoices, SeasonChoices, SizeChoices } from "../enum/Clothing";
import { BaseModel } from "./BaseModel";

export class ClothingItem extends BaseModel {
  donor_id: number;
  description: string;
  color: string;
  gender: GenderChoices;
  size: SizeChoices;
  season: SeasonChoices;

  constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    donorId: number,
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
    this.donor_id = donorId;
    this.description = description;
    this.color = color;
    this.gender = gender;
    this.size = size;
    this.season = season;
  }
}
