import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { ShowsSearchComponent } from './shared/component/shows-search/shows-search.component';
import { ProductsSearchComponent } from './shared/component/products-search/products-search.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
  {
    path:'home',
    component:HomeComponent
  },
  {
   path:'products-search',
   component:ProductsSearchComponent
  },
  {
    path:'shows-search',
    component:ShowsSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
