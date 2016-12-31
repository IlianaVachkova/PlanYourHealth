import { Pipe, PipeTransform } from '@angular/core';
import { FoodAdditive } from '../core/models/additive.model';

@Pipe({
    name: 'additivesFilter'
})

export class AdditivesFilterPipe implements PipeTransform {
    transform(additives: FoodAdditive[], filterValue: string): FoodAdditive[] {
        if (!filterValue) {
            return additives;
        }

        return additives.filter(item =>
            item.name.toLocaleLowerCase()
            .indexOf(filterValue) > -1);
    }
}