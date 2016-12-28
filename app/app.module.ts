import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SortPipe } from './pipes/SortPipe';
import { AdditiveService } from './core/additives.service';
import { AdditiveDetailComponent} from './additive-detail.component';
import { AdditiveListComponent } from './additive-list.component';
import { AdditiveShortComponent } from './additive-short.component';
import { HomeComponent} from './home.component';
import { PageNotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'additive/:id',  component: AdditiveDetailComponent },
  {
    path: 'additives',
    component: AdditiveListComponent,
  },
  {
      path:'home',
      component:HomeComponent
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
        HomeComponent
        ],
    imports: [RouterModule.forRoot(appRoutes),BrowserModule, HttpModule ],
    providers:[ AdditiveService],
    bootstrap: [AppComponent]
})
export class AppModule { }
