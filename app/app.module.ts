import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SortPipe } from './pipes/SortPipe';
import { AdditiveService } from './core/additives.service';
import { AdditiveDetailComponent} from './additive-detail.component';
import { AdditiveListComponent } from './additive-list.component';
import { AdditiveShortComponent } from './additive-short.component';
import { HomeComponent} from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AdditiveAddComponent } from './additive-add.component'
import { AuthenticationService } from '../app/core/services/authentication.service';
import { UserService } from '../app/core/services/user.service';

const appRoutes: Routes = [
  { path: 'additive/:id',  component: AdditiveDetailComponent },
  {
    path: 'additives',
    component: AdditiveListComponent,
  },
  {
      path:'additives/add',
      component:AdditiveAddComponent
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
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    declarations:[
        AppComponent,
        SortPipe,
        AdditiveListComponent, 
        AdditiveShortComponent,
        AdditiveDetailComponent,
        PageNotFoundComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AdditiveAddComponent
        ],
    imports: [RouterModule.forRoot(appRoutes),BrowserModule, HttpModule, FormsModule ],
    providers:[ AdditiveService, AuthenticationService, UserService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
