import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../model/utilisateur';

const URL = "https://localhost:7290/api/";

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private http : HttpClient) { }

  // Developper la methode pour avoir la liste des etudiants
  // Pour le relier à l'api, on a besoin du http de l'api (plus haut)

  public getAllUtilisateurs(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(URL+"Utilisateursss");
  }

  public ajoutUtilisateurs(utilisateurAdd : Utilisateur) : Observable<number>{
    return this.http.post<number>(URL+"Utilisateursss", utilisateurAdd);
  }

  public modifUtilisateurs(utilisateurModif : Utilisateur) : Observable<number>{
    return this.http.put<number>(URL+"Utilisateursss", utilisateurModif);
  }

  public suppUtilisateurs(id : number | undefined) : Observable<number>{
    return this.http.delete<number>(URL+"Utilisateursss/"+id);
  }

  public getUtilisateur(id : number | undefined) : Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(URL+"Utilisateursss/"+id);
  }


}
