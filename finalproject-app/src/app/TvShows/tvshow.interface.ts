/****[ READ ME ]*****************
 * Author: Dylan Buehler
 * Date: 12/7/2019
 * Filename: tvshow.interface.ts
 * Copyright: DilCoInc 2019
 ********************************/

//Creates an interface to base tv shows from the api on
export interface ITvshow{
    original_name:string;
    genre_ids:number[];
    name:string;
    popularity:number;
    origin_country:string[];
    vote_count:number;
    first_air_date:string;
    backdrop_path:string;
    original_language:string;
    id:number;
    vote_average:number;
    overview:string;
    poster_path:string;
}//End ITvshow