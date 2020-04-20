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

  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data): Observable<Item> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<Item>(this.itemPath, data);
  }
}
