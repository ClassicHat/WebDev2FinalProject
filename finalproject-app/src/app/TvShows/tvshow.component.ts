/****[ READ ME ]*****************
 * Author: Dylan Buehler
 * Date: 12/7/2019
 * Filename: tvshow.component.ts
 * Copyright: DilCoInc 2019
 ********************************/

import { Component } from "@angular/core";
import { ITvshow } from './tvshow.interface';
import {TvshowService} from './tvshow.service';

 @Component({
     //fp stands for final project
     selector: "fp-tvshows",
     templateUrl: "./tvshow.component.html"
 })

 export class TvshowComponent{
     tvshows:ITvshow[] = [];

     constructor(private tvshowService:TvshowService){};

     ngOnInit():void{
         this.tvshowService.getTvshow().subscribe(tvshowsObserved => {
             this.tvshows = tvshowsObserved;
         })
     }//End ngOnInit


 }//End TvshowComponent