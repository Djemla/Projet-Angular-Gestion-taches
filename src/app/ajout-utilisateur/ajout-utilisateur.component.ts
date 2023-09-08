import { Component } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';
import { UtilisateursService } from '../services/utilisateurs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent {
  utilisateur : Utilisateur = new Utilisateur();

  constructor(private eService : UtilisateursService, private router : Router){
  
  }
  
  
  
  public ajouter():void{
  
    
    this.eService.ajoutUtilisateurs(this.utilisateur).subscribe(
      { // data c'est le retour de service (int)
        next: (data) => {
          if(data == 1){
            // Aller à home
            this.router.navigate(['homeUtilisateur']);
          }
        },
        error:(erreur) => console.log(erreur)
      });
  }
}
