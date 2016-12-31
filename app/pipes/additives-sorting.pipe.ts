import { Pipe, PipeTransform } from '@angular/core';
import { FoodAdditive } from '../core/models/additive.model';

@Pipe({
    name: 'additivesSort'
})

export class AdditivesSortingPipe implements PipeTransform {
    transform(additives: FoodAdditive[], parameters: string[]): FoodAdditive[] {
        if (!additives) {
            return [];
        }
        return additives.sort((a, b) => {
            switch (parameters[0]) {
                case 'Name':
                    return parameters[1] === 'asc' ?
                        a.name.localeCompare(b.name) :
                        b.name.localeCompare(a.name);
                case 'Rating':
                    return parameters[1] === 'asc' ?
                        +a.rating - +b.rating :
                        +b.rating - +a.rating;
                case 'Purpose':
                    return parameters[1] === 'asc' ?
                        +a.purpose - +b.purpose :
                        +b.purpose - +a.purpose;
            }
        });
    }
}