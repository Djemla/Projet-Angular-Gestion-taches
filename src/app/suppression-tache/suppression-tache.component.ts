import { Component } from '@angular/core';
import { TachesService } from '../services/taches.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppression-tache',
  templateUrl: './suppression-tache.component.html',
  styleUrls: ['./suppression-tache.component.css']
})
export class SuppressionTacheComponent {
id : number | undefined;
indice : boolean = false;

// IoD Service
constructor(private eService : TachesService, private router : Router){

}

public supprimer():void{
  this.eService.suppTache(this.id).subscribe(
    {
      next : (data) => {
        if(data == 1){
          this.indice = false;
          this.router.navigate(['homeTache'])
        }
        this.indice = true;
      },
      error : (erreur) => {
        console.log(erreur);
        
        this.router.navigate(['deleteTache'])
      }
    })
}


}
