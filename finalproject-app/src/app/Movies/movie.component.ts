/****[ READ ME ]*****************
 * Author: Dylan Buehler
 * Date: 12/7/2019
 * Filename: movie.component.ts
 * Copyright: DilCoInc 2019
 ********************************/

import { Component } from "@angular/core";
import { IMovie } from './movie.interface';
import { MovieService } from './movie.service';

@Component({
    //fp stands for final project
    selector: "fp-movies",
    templateUrl: "./movie.component.html",
    styleUrls: ['../app.component.css']
})

export class MovieComponent{
    movies:IMovie[] = [];

    constructor(private movieService:MovieService){};

    ngOnInit():void{
        this.movieService.getMovie().subscribe(moviesObserved => {
            this.movies = moviesObserved;
        })
    }//End ngOnInit

}//End MovieComponent