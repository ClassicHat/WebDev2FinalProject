/****[ READ ME ]*****************
 * Author: Dylan Buehler
 * Date: 12/7/2019
 * Filename: home.component.ts
 * Copyright: DilCoInc 2019
 ********************************/

import { Component } from '@angular/core';
import { ITvshow } from '../TvShows/tvshow.interface';
import { TvshowService } from '../TvShows/tvshow.service';
import { IMovie } from '../Movies/movie.interface';
import { MovieService } from '../Movies/movie.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent {
  public pageTitle = 'Home Page';

  tvshows:ITvshow[] = [];
  movies:IMovie[] = [];
  constructor(
    private tvshowService:TvshowService, 
    private movieService:MovieService,
    private router:Router
  ){};

  ngOnInit():void{
    //gets the tvshows
    this.tvshowService.getTvshow().subscribe(tvshowsObserved => {
      this.tvshows = tvshowsObserved;
    })

    //gets the movies
    this.movieService.getMovie().subscribe(moviesObserved => {
      this.movies = moviesObserved;
    })
  }//End ngOnInit

  onClickMovie():void{
    this.router.navigate(['./movies']);
  }//End onClickMovie

  onClickShow():void{
    this.router.navigate(['./tvshows']);
  }//End onClickShow

}//End HomeComponent