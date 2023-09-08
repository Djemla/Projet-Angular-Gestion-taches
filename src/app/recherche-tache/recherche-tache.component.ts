import { Component,OnInit } from '@angular/core';
import { TachesService } from '../services/taches.service';
import { Tache } from '../model/tache';

@Component({
  selector: 'app-recherche-tache',
  templateUrl: './recherche-tache.component.html',
  styleUrls: ['./recherche-tache.component.css']
})
export class RechercheTacheComponent implements OnInit{
id : number | undefined;
taches : Tache[] | null = null;
indice : boolean = false;


// IoD
constructor(private eService : TachesService){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

public rechercher():void{
this.eService.getTache(this.id).subscribe(
  {
    next : (data) => {
      
      console.log(data);
      this.taches = data;
      if(this.taches.length >0){
        this.indice = false;
      }else{
        this.indice = true;
      }
   
    },
    error : (erreur) => {
      console.log(erreur);
      this.indice = true;
    }
  })
}
}
