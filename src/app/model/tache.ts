import { Utilisateur } from "./utilisateur";

export class Tache {
    id : number | undefined;
    titre : string | undefined;
    description : string | undefined;
    date_Echeance :Date=new Date();
    priorite : string | undefined;


    utilisateur? : Utilisateur =new Utilisateur();
}
