/****[ READ ME ]*****************
 * Author: Dylan Buehler
 * Date: 12/7/2019
 * Filename: tvshow.service.ts
 * Copyright: DilCoInc 2019
 ********************************/

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITvshow } from './tvshow.interface';

@Injectable({
    providedIn: 'root'
})//End Injectable

export class TvshowService{
    constructor(private http:HttpClient){};

    tvshowUrl = "https://api.themoviedb.org/3/tv/popular?api_key=2dc8b3afe9ba013bcb6cee9519e7cdf6&language=en-US&page=1";

    getTvshow():Observable<ITvshow[]>{
        return this.http.get<ITvshow[]>(this.tvshowUrl);
    }//End getTvshow
}//End TvshowService