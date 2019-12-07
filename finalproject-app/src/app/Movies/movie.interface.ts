/****[ READ ME ]*****************
 * Author: Dylan Buehler
 * Date: 12/7/2019
 * Filename: movie.interface.ts
 * Copyright: DilCoInc 2019
 ********************************/

//Creates an interface to base Movies from the api on
export interface IMovie{
    popularity:number;
    vote_count:number;
    video:boolean;
    poster_path:string;
    id:number;
    adult:boolean;
    backdrop_path:string;
    original_language:string;
    original_title:string;
    genre_ids:number[];
    title:string;
    vote_average:number;
    overview:string;
    release_date:string;
}//End IMovie