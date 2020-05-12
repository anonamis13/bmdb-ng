import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './feature/movie/movie.component';
import { ActorComponent } from './feature/actor/actor.component';
import { CreditComponent } from './feature/credit/credit.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ActorComponent,
    CreditComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent,
    MovieEditComponent,
    MovieCreateComponent,
    MovieDetailComponent,
    ActorCreateComponent,
    ActorDetailComponent,
    ActorEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
