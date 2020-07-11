import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande.service';
import { MyInterface } from 'src/app/models/MyInterface';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],
})
export class CommandeComponent implements OnInit {
  commandeList: MyInterface[] = [];
  myCommande:any = {
    id:'',
    name:'',
    poids:'',
    prix:''
   }

  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {
    this.getCommande();
  }

  //CRUD
  //@Methode Get
  getCommande() {
    this.commandeService.getAll().subscribe((data) => {
      this.commandeList = data;
    });
  }

  //@Methode Delete
  deleteCommande(id) {
    this.commandeService.delete(id).subscribe(() => {
      this.commandeList = this.commandeList.filter(
        (commande) => commande.id != id
      );
    });
  }

   //@Methode addCommande
   addCommande(){
     this.commandeService.postCommande(this.myCommande)
     .subscribe((commande) => {
      this.commandeList = [commande ,...this.commandeList]
     })
   }

}
