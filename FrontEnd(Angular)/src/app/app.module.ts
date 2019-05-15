import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { MusicComponent } from './music/music.component';
import { SportsComponent } from './sports/sports.component';
import { MoviesComponent } from './movies/movies.component';
import { AddvideosComponent } from './addvideos/addvideos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './shared/videos/video.service';
import { CategorieService } from './shared/categories/categorie.service';
import { UpdatevideosComponent } from './updatevideos/updatevideos.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    routingComponents,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    AccountComponent,
    MusicComponent,
    SportsComponent,
    MoviesComponent,
    AddvideosComponent,
    UpdatevideosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxYoutubePlayerModule,
    ToastrModule.forRoot()
  ],
  providers: [VideoService,CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
