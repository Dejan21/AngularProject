import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'edit', component: EditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
