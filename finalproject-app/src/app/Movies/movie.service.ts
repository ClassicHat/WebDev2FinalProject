/****[ READ ME ]*****************
 * Author: Dylan Buehler
 * Date: 12/7/2019
 * Filename: movie.service.ts
 * Copyright: DilCoInc 2019
 ********************************/

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from './movie.interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})//End Injectable

export class MovieService{
    constructor(private http:HttpClient){};

    movieUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=2dc8b3afe9ba013bcb6cee9519e7cdf6&language=en-US&page=1";

    getMovie():Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this.movieUrl);
    }//End getMovie
}//End MovieService