import { Component } from '@angular/core';
import { Tache } from '../model/tache';
import { TachesService } from '../services/taches.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-tache',
  templateUrl: './modif-tache.component.html',
  styleUrls: ['./modif-tache.component.css']
})
export class ModifTacheComponent {
tache : Tache = new Tache();
indice : boolean = false; // Si l'indice est true, ça veut dire que la modif n'a pas marché

// IoD service
constructor(private eService : TachesService, private router : Router){

}

public modifier():void{
  this.eService.modifTache(this.tache).subscribe(
    {
      next : (data) => {
        if(data == 1){
          this.indice = false;
          this.router.navigate(['homeTache']);
        }
      },
      error : (erreur) => {
        console.log(erreur);
        this.indice=true;
        this.router.navigate(['updateTache']);
      }
    })
}


}
