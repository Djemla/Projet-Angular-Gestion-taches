import { Tache } from "./tache";

export class Utilisateur {
    id : number | undefined;
    nom : string | undefined;
    tache? : Tache[];
}
