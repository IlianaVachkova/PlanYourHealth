import { Component, Input } from '@angular/core';
import { FoodAdditive } from './core/additive.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdditiveService }  from './core/additives.service';

@Component({
    selector: 'mvdb-additive-detailed',
    templateUrl: './additive-detail.component.html'
})

export class AdditiveDetailComponent{
  additive: FoodAdditive;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AdditiveService
  ) {}
  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getAdditiveById(params['id']))
      .subscribe((additive: FoodAdditive) => this.additive = additive);
      console.log(this.additive);
  }

  
}
