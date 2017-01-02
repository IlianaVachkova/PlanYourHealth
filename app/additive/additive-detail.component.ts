import { Component, Input } from '@angular/core';
import { FoodAdditive } from '../core/models/additive.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdditiveService }  from '../core/services/additives.service';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    selector: 'mvdb-additive-detailed',
    templateUrl: './additive-detail.component.html'
})

export class AdditiveDetailComponent{
  additive: FoodAdditive;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AdditiveService,
    private authService: AuthenticationService
  ) {}

  public isLogged() {
      return this.authService.checkIfUserIsLoggedIn();
   }
  saveToFavorites(){

  }
  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getAdditiveById(params['id']))
      .subscribe((add: FoodAdditive) => {
          this.additive = add;          
        });
  }  
}
