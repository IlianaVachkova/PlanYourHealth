import { Component, OnInit } from '@angular/core';
import { AdditiveService } from './core/additives.service';
import { FoodAdditive } from './core/additive.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'additive-list',
    templateUrl: './additive-list.component.html'
})

export class AdditiveListComponent implements OnInit  {
    additivies : FoodAdditive[];
    mode = 'Observable';
    errorMessage: string;
    selectedId: number;

    constructor (
        private additiveService: AdditiveService,
        private route: ActivatedRoute,
        private router: Router) {}
    ngOnInit() { this.getAdditives(); }
    getAdditives(){
        this.additiveService.getAdditives()
                        .subscribe(
                            additives => this.additivies = additives,
                            error => this.errorMessage = <any>error);
    }
    onSelect(additive: FoodAdditive) {
        console.log("I was clicked")
        console.log(additive);
        this.router.navigate(['/additive', additive.Id]);
    }
}