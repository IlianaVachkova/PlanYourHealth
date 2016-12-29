import { Component, Input , OnInit} from '@angular/core';
import { FoodAdditive } from '../core/models/additive.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdditiveService }  from '../core/services/additives.service';

@Component({
    selector: 'mvdb-additive-add',
    templateUrl: './additive-add.component.html'
})

export class AdditiveAddComponent implements OnInit{
    additivies : FoodAdditive[];
    mode = 'Observable';
    errorMessage: string;

    constructor (
        private additiveService: AdditiveService) {}

    ngOnInit() { this.getAdditives(); }

    getAdditives(){
        this.additiveService.getAdditives()
                        .subscribe(
                            additives => this.additivies = additives,
                            error => this.errorMessage = <any>error);
    }
    
    addAdditive(name: string, image:string, rating:string, category: string, quantity: string, ingredients: string, purpose: string, madeBy: string ) {
    console.log('click');
    if (!name) { return; }
    console.log(this.additivies);
    this.additiveService.addAdditive(this.additivies.length + 1, name, image, category, quantity, ingredients, purpose, madeBy)
                   .subscribe(
                     additive  => this.additivies.push(additive),
                     error =>  this.errorMessage = <any>error);
    }
   
  
}
