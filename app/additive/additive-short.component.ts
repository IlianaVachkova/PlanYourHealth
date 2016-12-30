import { Component, Input } from '@angular/core';
import { FoodAdditive } from '../core/models/additive.model';

@Component({
    selector: '[mvdb-additive-short]',
    templateUrl: `
        <td>
            <img [src]="additive.image" [alt]="additive.name">
        </td>
        <td>
            {{additive.name}}
        </td>
        <td>
            {{additive.purpose}}
        </td>
        <td>
            {{additive.rating}}
        </td>
    `
})

export class AdditiveShortComponent{
   @Input() additive: FoodAdditive;
}
