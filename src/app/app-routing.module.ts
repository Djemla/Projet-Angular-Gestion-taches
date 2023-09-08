import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilTacheComponent } from './acceuil-tache/acceuil-tache.component';
import { AjoutTacheComponent } from './ajout-tache/ajout-tache.component';
import { ModifTacheComponent } from './modif-tache/modif-tache.component';
import { SuppressionTacheComponent } from './suppression-tache/suppression-tache.component';
import { RechercheTacheComponent } from './recherche-tache/recherche-tache.component';
import { AcceuilUtilisateurComponent } from './acceuil-utilisateur/acceuil-utilisateur.component';
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';
import { ModifUtilisateurComponent } from './modif-utilisateur/modif-utilisateur.component';
import { SuppressionUtilisateurComponent } from './suppression-utilisateur/suppression-utilisateur.component';
import { RechercheUtilisateurComponent } from './recherche-utilisateur/recherche-utilisateur.component';

const routes: Routes = [
  {path:'', redirectTo:'homeTache', pathMatch:'full'},
  {path:'homeTache', component: AcceuilTacheComponent},
  {path:'addTache', component: AjoutTacheComponent},
  {path:'updateTache', component: ModifTacheComponent},
  {path:'deleteTache', component: SuppressionTacheComponent},
  {path:'findTache', component: RechercheTacheComponent},

  {path:'', redirectTo:'homeUtilisateur', pathMatch:'full'},
  {path:'homeUtilisateur', component: AcceuilUtilisateurComponent},
  {path:'addUtilisateur', component: AjoutUtilisateurComponent},
  {path:'updateUtilisateur', component: ModifUtilisateurComponent},
  {path:'deleteUtilisateur', component: SuppressionUtilisateurComponent},
  {path:'findUtilisateur', component: RechercheUtilisateurComponent},

  {path:'**', component: AcceuilTacheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
