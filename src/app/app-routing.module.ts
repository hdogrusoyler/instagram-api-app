import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ContentComponent} from './content/content.component'

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'content', component: ContentComponent },
  { path: 'content/:contentId', component: ContentComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
