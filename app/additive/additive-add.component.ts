import { Component, Input , OnInit} from '@angular/core';
import { FoodAdditive } from '../core/models/additive.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdditiveService }  from '../core/services/additives.service';

@Component({
    selector: 'mvdb-additive-add',
    templateUrl: './additive-add.component.html'
})

export class AdditiveAddComponent {
    mode = 'Observable';
    errorMessage: string;

    constructor (
        private additiveService: AdditiveService,
        private router: Router) {}
    
    addAdditive(name: string, image:string, rating:string, category: string, quantity: string, ingredients: string, purpose: string, madeBy: string ) {
    if (!name) { return; }
    let temparr : String[] = [];
    temparr.push(ingredients);
    this.additiveService.addAdditive(name, image, +rating, category, +quantity, purpose, madeBy, temparr)
                   .subscribe(                     
                         additive=>{                                               
                             this.router.navigate(['additives']);              
                        },
                        error =>  this.errorMessage = <any>error);
    }
   
  
}
