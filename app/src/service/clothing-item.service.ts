import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClothingItem } from '../models/ClothingItem';
import { Environment } from '../app/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class ClothingItemService {


  constructor(private http: HttpClient) { }

  getClothingItems(): Observable<ClothingItem[]> {
    return this.http.get<ClothingItem[]>(Environment.url + 'clothing/');
  }

  getClothingItemById(id: number): Observable<ClothingItem> {
    return this.http.get<ClothingItem>(Environment.url + 'clothing/' + id + '/');
  }

  createClothingItem(data: ClothingItem): Observable<ClothingItem> {
    return this.http.post<ClothingItem>(Environment.url + 'clothing/', data);
  }

  updateClothingItem(id: number, data: ClothingItem): Observable<ClothingItem> {
    return this.http.put<ClothingItem>(Environment.url + 'clothing/' + id + '/', data);
  }

  deleteClothingItem(id: number): Observable<any> {
    return this.http.delete<any>(Environment.url + 'clothing/' + id + '/');
  }
}
