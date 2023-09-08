import { Component, OnInit } from '@angular/core';
import { Tache } from '../model/tache';
import { TachesService } from '../services/taches.service';

@Component({
  selector: 'app-acceuil-tache',
  templateUrl: './acceuil-tache.component.html',
  styleUrls: ['./acceuil-tache.component.css']
})
export class AcceuilTacheComponent implements OnInit{
// Declaration des propriétés (une collection) qui stockent le model MVC (liste des taches) afin de les afficher dans le template HTML de Acceuil
  // AcceuilTacheComponent doit contenir la liste des taches; taches ici sera la collection qui stockera la liste des taches
  taches : Tache[] | undefined;


  now:Date=new Date();
  // Injecter le serviceTache afin d'appeler ses methodes
  constructor(private eService : TachesService){

  }

  // On cherche à recuperer les informations lors de l'instanciation de ce composant
  ngOnInit(): void {
  this.eService.getAllTaches().subscribe(
    {
      next: (data) => {

        this.taches=data
 
        console.log(this.taches)
;
      
      }, // Et à l'interieur il va recuperer les données
      error:(erreur)=> {console.log(erreur)}, //
      complete:() => console.log("l'observable a terminé") 
    })
  }

  
}
