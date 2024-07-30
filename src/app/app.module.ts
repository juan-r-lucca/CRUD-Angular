import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDestinosComponent } from './components/get-destinos/get-destinos.component';
import { PostDestinosComponent } from './components/post-destinos/post-destinos.component';
import { PutDestinosComponent } from './components/put-destinos/put-destinos.component';
import { DeleteDestinosComponent } from './components/delete-destinos/delete-destinos.component';
import { GetDestinosByIdComponent } from './components/get-destinos-by-id/get-destinos-by-id.component';
import {MatNativeDateModule} from '@angular/material/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DestinosComponent } from './destinos-material/destinos/destinos.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    GetDestinosComponent,
    PostDestinosComponent,
    PutDestinosComponent,
    DeleteDestinosComponent,
    GetDestinosByIdComponent,
    DestinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    RouterModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
