import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinosService } from './service/destinos.service';
import { GetDestinosComponent } from './components/get-destinos/get-destinos.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { PostDestinosComponent } from './components/post-destinos/post-destinos.component';
import { PutDestinosComponent } from './components/put-destinos/put-destinos.component';
import { DeleteDestinosComponent } from './components/delete-destinos/delete-destinos.component';

const routes: Routes = [
{
  path: 'destinos', component: PostDestinosComponent
},
{
  path: '', component: GetDestinosComponent
},
{
  path: 'destinos/:id', component: PutDestinosComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
