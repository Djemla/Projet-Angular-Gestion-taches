import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'app-acceuil-utilisateur',
  templateUrl: './acceuil-utilisateur.component.html',
  styleUrls: ['./acceuil-utilisateur.component.css']
})
export class AcceuilUtilisateurComponent implements OnInit{
  utilisateurs : Utilisateur[] | undefined;

  // Injecter le serviceTache afin d'appeler ses methodes
  constructor(private eService : UtilisateursService){

  }

  // On cherche à recuperer les informations lors de l'instanciation de ce composant
  ngOnInit(): void {
    this.eService.getAllUtilisateurs().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.utilisateurs=data}, // Et à l'interieur il va recuperer les données
        error:(erreur)=> {console.log(erreur)}, //
        complete:() => console.log("l'observable a terminé") 
      })
    }
  
}
