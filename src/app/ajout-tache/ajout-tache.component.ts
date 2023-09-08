import { Component , OnInit} from '@angular/core';
import { Tache } from '../model/tache';
import { TachesService } from '../services/taches.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/utilisateur';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'app-ajout-tache',
  templateUrl: './ajout-tache.component.html',
  styleUrls: ['./ajout-tache.component.css']
})
export class AjoutTacheComponent implements OnInit{
  // Instanciation de Tache pour que tache puisse avoir toutes les propriétes de taches, utiles pour le Html
tache : Tache = new Tache();
user :Utilisateur=new Utilisateur();

users: Utilisateur[] | undefined;

constructor(private eService : TachesService, private router : Router,private uService:UtilisateursService){
  
}
  ngOnInit(): void {
    this.uService.getAllUtilisateurs().subscribe({
        next: (data) => this.users=data
    });
  }



public ajouter():void{

  this.tache.utilisateur=this.user;
  
  this.eService.ajoutTache(this.tache).subscribe(
    { // data c'est le retour de service (int)
      next: (data) => {
        if(data == 1){
          // Aller à home
          this.router.navigate(['homeTache']);
        }
      },
      error:(erreur) => console.log(erreur)
    });
}

}
