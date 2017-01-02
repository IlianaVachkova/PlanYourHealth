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
  isFavourited:boolean
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AdditiveService,
    private authService: AuthenticationService
  ) {
    this.isFavourited = true;
  }

  public isLogged() {
      return this.authService.checkIfUserIsLoggedIn();
  }

  checkIfAdditiveIsInFavourties(){
    if(this.isLogged()){
      var loggedUser = JSON.parse(localStorage.getItem('currentUser'));
      var loggedUserInfo = loggedUser.user;
      var favourites = loggedUserInfo.favouriteFoodAdditives as FoodAdditive[];
      if(favourites.find(add=> add._id == this.additive._id)){
        return true;
      }    
    }
    return false;
  }
  
  saveToFavorites(add:FoodAdditive){
    var loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    var loggedUserInfo = loggedUser.user;
    var favourites = loggedUserInfo.favouriteFoodAdditives
    favourites.push(add);
    var user = {"user": loggedUserInfo}
    localStorage.setItem("currentUser", JSON.stringify(user));
    console.log(localStorage.getItem('currentUser'));
    this.isFavourited = this.checkIfAdditiveIsInFavourties(); 
  }
  
  removeFromFavourites(add:FoodAdditive){
    var loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    var loggedUserInfo = loggedUser.user;
    var favourites = loggedUserInfo.favouriteFoodAdditives as FoodAdditive[]
    var index = favourites.findIndex(a=> a._id == add._id);
    console.log(index);
    if(index != undefined){
      favourites.splice(index,1);
      console.log("i was removed");      
      var user = {"user": loggedUserInfo}
      localStorage.setItem("currentUser", JSON.stringify(user));
      console.log(localStorage.getItem('currentUser'));
      this.isFavourited = this.checkIfAdditiveIsInFavourties(); 
    }
    
  }
  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getAdditiveById(params['id']))
      .subscribe((add: FoodAdditive) => {
          this.additive = add;    
          this.isFavourited = this.checkIfAdditiveIsInFavourties();      
        });
    
  }  
}
