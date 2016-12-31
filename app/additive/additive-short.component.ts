import { Component, OnInit, Input } from '@angular/core';
import { FoodAdditive } from '../core/models/additive.model';

@Component({
    selector: '[mvdb-additive-short]',
    templateUrl: './additive-short.component.html'
})

export class AdditiveShortComponent implements OnInit {
   @Input() additive: FoodAdditive;

   constructor() { }

   ngOnInit() { }

   get name() {
       return this.additive.name;
   }

   get image() {
       return this.additive.image;
   }

   get purpose() {
       return this.additive.purpose;
   }

   get rating() {
       return this.additive.rating;
   }
}