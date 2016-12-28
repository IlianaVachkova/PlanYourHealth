import { Component, Input } from '@angular/core';
import { FoodAdditive } from './core/additive.model';

@Component({
    selector: 'mvdb-additive-detailed',
    templateUrl: './additive-detail.component.html'
})

export class AdditiveDetailComponent{
   @Input() additive: FoodAdditive;
}
