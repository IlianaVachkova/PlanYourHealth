import { Component, Input , OnInit} from '@angular/core';
import { FoodAdditive } from '../core/models/additive.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdditiveService }  from '../core/services/additives.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'mvdb-additive-add',
    templateUrl: './additive-add.component.html'
})

export class AdditiveAddComponent {
    mode = 'Observable';
    
    errorMessage: string;
    private successAdditive: string = 'Additive added successfully!';
    constructor (
        private additiveService: AdditiveService,
        private router: Router,
        public toastr: ToastsManager) {}
    
  
    addAdditive(name: string, image:string, rating:string, category: string, quantity: string, ingredients: string, purpose: string, madeBy: string ) {
    if (!name) { return; }
    let temparr : String[] = [];
    temparr.push(ingredients);
    this.additiveService.addAdditive(name, image, +rating, category, +quantity, purpose, madeBy, temparr)
                   .subscribe(                     
                         additive=>{                                                                      
                             this.router.navigate(['additives']);     
                             this.toastr.success(this.successAdditive);             
                        },
                        error => { 
                             this.errorMessage = <any>error;
                        });
    }
  
}
