import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CinepolisComponent } from './cine/cinepolis/cinepolis.component';
import { ProductListComponent } from './productos/product-list/product-list.component';


const routes: Routes = [
  {path:"", component: ProductListComponent},
  {path:"operasBas", component: OperasBasComponent},
  {path:"tablas", component: TablaComponent },
  {path:"cinepolis", component: CinepolisComponent }
  //Nombre de la clase que va a ser el principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
