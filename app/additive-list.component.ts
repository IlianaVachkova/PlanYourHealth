import { Component, OnInit } from '@angular/core';
import { AdditiveService } from './core/additives.service';
import { FoodAdditive } from './core/additive.model';

@Component({
    selector: 'additive-list',
    templateUrl: './additive-list.component.html'
})

export class AdditiveListComponent implements OnInit  {
    additivies : FoodAdditive[];
    mode = 'Observable';
    errorMessage: string;
    constructor (private additiveService: AdditiveService) {}
    ngOnInit() { this.getAdditives(); }
    getAdditives(){
        this.additiveService.getAdditives()
                        .subscribe(
                            additives => this.additivies = additives,
                            error => this.errorMessage = <any>error);
    }
  
}