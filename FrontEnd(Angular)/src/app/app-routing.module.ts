import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { SportsComponent } from './sports/sports.component';
import { AddvideosComponent } from './addvideos/addvideos.component';
import { UpdatevideosComponent } from './updatevideos/updatevideos.component';


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'account', component:AccountComponent },
  { path: 'music', component:MusicComponent },
  { path: 'movies', component:MoviesComponent },
  { path: 'sports', component:SportsComponent },
  { path: 'addvideos', component:AddvideosComponent },
  { path: 'updatevideos', component:UpdatevideosComponent},
  { path: '**', component:PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent,HomeComponent,LoginComponent,PageNotFoundComponent]
