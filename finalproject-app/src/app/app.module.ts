import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './Movies/movie.component';
import { TvshowComponent } from './TvShows/tvshow.component';
import { HomeComponent } from './Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    TvshowComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'movies', component: MovieComponent},
      {path: 'tvshows', component: TvshowComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
