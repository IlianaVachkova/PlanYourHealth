import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SortPipe } from './pipes/SortPipe';
import { AdditiveService } from './core/additives.service';
import { AdditiveListComponent} from './additive-list.component'
import { AdditiveShortComponent} from './additive-short.component'
@NgModule({
    declarations:[AppComponent,SortPipe, AdditiveListComponent, AdditiveShortComponent],
    imports: [BrowserModule, HttpModule],
    providers:[ AdditiveService],
    bootstrap: [AppComponent]
})
export class AppModule { }
