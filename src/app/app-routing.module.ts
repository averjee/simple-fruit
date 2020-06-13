import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';

const routes: Routes = [
  { path: "fruits", component: FruitsComponent },
  { path: "fruit-detail", component: FruitDetailComponent },
  { path: "fruit-detail/:id", component: FruitDetailComponent },
  { path: '', redirectTo: 'fruits', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
