import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemPath = environment.apiUrl + 'items';

  constructor(private http: HttpClient) { }

  create(data): Observable<Item> {
    return this.http.post<Item>(this.itemPath, data);
  }
}
