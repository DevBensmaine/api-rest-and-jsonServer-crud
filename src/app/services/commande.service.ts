import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyInterface } from '../models/MyInterface';
@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  urlApi = 'http://localhost:5000/commandes';

  constructor(private http: HttpClient) {}

  //CRUD
  //@Methode Get
  getAll() {
    return this.http.get<MyInterface[]>(this.urlApi);
  }

  //@Methode Delete
  delete(id) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }

   //@Methode addCommande
   postCommande(commande) {
    return this.http.post<MyInterface>(this.urlApi , commande);
  }
}
