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
                        a.Name.localeCompare(b.Name) :
                        b.Name.localeCompare(a.Name);
                case 'Rating':
                    return parameters[1] === 'asc' ?
                        +a.Rating - +b.Rating :
                        +b.Rating - +a.Rating;
                case 'Purpose':
                    return parameters[1] === 'asc' ?
                        +a.Purpose - +b.Purpose :
                        +b.Purpose - +a.Purpose;
            }
        });
    }
}