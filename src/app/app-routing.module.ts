import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreationsPageComponent } from './creations-page/creations-page.component';
import { ExcreationPageComponent } from './excreation-page/excreation-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


const routes: Routes = [
  { path:'', component: HomePageComponent},
  { path:'creations', component: CreationsPageComponent},
  { path:'excreation', component: ExcreationPageComponent},
  { path:'about', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
