import { Component, Input } from '@angular/core';
import { FoodAdditive } from '../core/models/additive.model';

@Component({
    selector: '[mvdb-additive-short]',
    templateUrl: `
        <td>
            <img [src]="additive.Image" [alt]="additive.Name">
        </td>
        <td>
            {{additive.Name}}
        </td>
        <td>
            {{additive.Purpose}}
        </td>
        <td>
            {{additive.Rating}}
        </td>
    `
})

export class AdditiveShortComponent{
   @Input() additive: FoodAdditive;
}
