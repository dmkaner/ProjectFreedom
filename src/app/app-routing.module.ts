import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreationsPageComponent } from './creations-page/creations-page.component';
import { ExcreationPageComponent } from './excreation-page/excreation-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PostsploitPageComponent } from './postsploit-page/postsploit-page.component';
import { ForumPageComponent } from './forum-page/forum-page.component';
import { TutorialsPageComponent } from './tutorials-page/tutorials-page.component';


const routes: Routes = [
  { path:'', component: HomePageComponent},
  { path:'creations', component: CreationsPageComponent},
  { path:'tutorials', component: TutorialsPageComponent},
  { path:'about', component: AboutPageComponent},
  { path:'forum', component: ForumPageComponent},
  { path:'excreation', component: ExcreationPageComponent},
  { path:'postsploit', component: PostsploitPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
