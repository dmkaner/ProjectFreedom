import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CreationsPageComponent } from './creations-page/creations-page.component';
import { ExcreationPageComponent } from './excreation-page/excreation-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PostsploitPageComponent } from './postsploit-page/postsploit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreationsPageComponent,
    ExcreationPageComponent,
    AboutPageComponent,
    PostsploitPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
