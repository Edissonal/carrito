import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCardsComponent } from './pages/main-cards/main-cards.component';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';
import { DetailShopingComponent } from './pages/detail-shoping/detail-shoping.component';

const routes: Routes = [
{path:'main',component:MainCardsComponent},
{path:'card-detail/:id',component:DetailCardComponent},
{path:'card-shoping/:id',component:DetailShopingComponent},
{path:'**',redirectTo:'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
