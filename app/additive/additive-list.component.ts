import { Component, OnInit } from '@angular/core';
import { AdditiveService } from '../core/services/additives.service';
import { FoodAdditive } from '../core/models/additive.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'additive-list',
    templateUrl: './additive-list.component.html'
})

export class AdditiveListComponent implements OnInit  {
    additivies : FoodAdditive[];
    private sortingProperties: string[];
    private pageTitle: string;
    private filterText: string;
    private sortingProperty: string;
    private direction: string;
    mode = 'Observable';
    errorMessage: string;
    selectedId: number;

    constructor (
        private additiveService: AdditiveService,
        private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit() { 
        this.pageTitle = 'The Food Additives List';
        this.sortingProperties = ['Name', 'Rating', 'Purpose'];
        this.sortingProperty = 'Rating';
        this.direction = 'desc';
        this.getAdditives(); 
    }

    getAdditives(){
        this.additiveService.getAdditives()
                        .subscribe(
                            additives => this.additivies = additives,
                            error => this.errorMessage = <any>error);
    }

    onSelect(additive: FoodAdditive) {
        console.log("I was clicked")
        console.log(additive);
        this.router.navigate(['/additive', additive._id]);
    }

    onInput(e: any) {
        this.filterText = e.target.value;
    }

    onSortChange(e: any) {
        this.sortingProperty = e.target.value;
    }

    onDirectionChange(e: any) {
        this.direction = e.target.value;
    }
}