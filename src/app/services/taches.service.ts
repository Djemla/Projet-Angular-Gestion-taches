import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from '../model/tache';
import { HttpClient } from '@angular/common/http';

const URL = "https://localhost:7290/api/";

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private http : HttpClient) { }

  // Developper la methode pour avoir la liste des etudiants
  // Pour le relier à l'api, on a besoin du http de l'api (plus haut)

  public getAllTaches(): Observable<Tache[]>{
    return this.http.get<Tache[]>(URL+"Tachesss");
  }

  public ajoutTache(tacheAdd : Tache) : Observable<number>{
    return this.http.post<number>(URL+"Tachesss", tacheAdd);
  }

  public modifTache(tacheModif : Tache) : Observable<number>{
    return this.http.put<number>(URL+"Tachesss", tacheModif);
  }

  public suppTache(id : number | undefined) : Observable<number>{
    return this.http.delete<number>(URL+"Tachesss/"+id);
  }

  public getTache(id : number | undefined) : Observable<Tache[]>{
    return this.http.get<Tache[]>(URL+"Tachesss/"+id);
  }
}
