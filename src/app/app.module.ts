import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilTacheComponent } from './acceuil-tache/acceuil-tache.component';
import { AcceuilUtilisateurComponent } from './acceuil-utilisateur/acceuil-utilisateur.component';
import { AjoutTacheComponent } from './ajout-tache/ajout-tache.component';
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';
import { ModifTacheComponent } from './modif-tache/modif-tache.component';
import { ModifUtilisateurComponent } from './modif-utilisateur/modif-utilisateur.component';
import { RechercheTacheComponent } from './recherche-tache/recherche-tache.component';
import { RechercheUtilisateurComponent } from './recherche-utilisateur/recherche-utilisateur.component';
import { SuppressionTacheComponent } from './suppression-tache/suppression-tache.component';
import { SuppressionUtilisateurComponent } from './suppression-utilisateur/suppression-utilisateur.component';
import { FormsModule } from '@angular/forms';
import { StatutPipe } from './pipes/statut.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilTacheComponent,
    AcceuilUtilisateurComponent,
    AjoutTacheComponent,
    AjoutUtilisateurComponent,
    ModifTacheComponent,
    ModifUtilisateurComponent,
    RechercheTacheComponent,
    RechercheUtilisateurComponent,
    SuppressionTacheComponent,
    SuppressionUtilisateurComponent,
    StatutPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
