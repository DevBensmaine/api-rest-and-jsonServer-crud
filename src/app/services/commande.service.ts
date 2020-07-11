import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MyInterface } from '../models/MyInterface'
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http :HttpClient) { }

  getAll() {
     return this.http.get<MyInterface[]>('http://localhost:5000/commandes')
  }


}
