import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { UserService } from '../app/core/services/user.service';
import { AuthenticationService } from '../app/core/services/authentication.service';
import { AdditiveService } from './core/services/additives.service';


import { AdditivesFilterPipe } from './pipes/additives-filter.pipe';
import { AdditivesSortingPipe } from './pipes/additives-sorting.pipe';

import { AdditiveDetailComponent, FavouriteListComponent, AdditiveListComponent,AdditiveShortComponent, AdditiveAddComponent } from './additive';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent} from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageNotFoundComponent } from './not-found.component';
import { CanActivateViaAuthGuard } from './can-activate';

import { CustomCounterComponent } from './custom-counter/custom-counter.component';

const appRoutes: Routes = [
  { path: 'additive/:id',  component: AdditiveDetailComponent },
  {
    path: 'additives',
    component: AdditiveListComponent,
  },
  {
      path:'additives/add',
      component:AdditiveAddComponent,
      canActivate: [ CanActivateViaAuthGuard ]
  },
  {
      path:'user/favourites',
      component:FavouriteListComponent,
      canActivate: [CanActivateViaAuthGuard]
  },
  {
      path:'home',
      component:HomeComponent
  },
  {
      path:'user/login',
      component: LoginComponent
  },
  {
      path:'user/register',
      component: RegisterComponent
  },
  {
      path:'user/profile',
      component: UserProfileComponent,
      canActivate: [ CanActivateViaAuthGuard ]
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations:[
        AppComponent,
        AdditivesFilterPipe,
        AdditivesSortingPipe,
        AdditiveListComponent, 
        AdditiveShortComponent,
        AdditiveDetailComponent,
        PageNotFoundComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
        UserProfileComponent,
        AdditiveAddComponent,
        FavouriteListComponent,
        CustomCounterComponent
        ],
    imports: [
        RouterModule.forRoot(appRoutes), 
        BrowserModule, 
        HttpModule, 
        FormsModule, 
        ToastModule 
        ],
    providers:[ 
        AdditiveService, 
        AuthenticationService, 
        UserService,
        CanActivateViaAuthGuard 
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }
