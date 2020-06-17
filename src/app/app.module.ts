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
import { ForumPageComponent } from './forum-page/forum-page.component';
import { TutorialsPageComponent } from './tutorials-page/tutorials-page.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreationsPageComponent,
    ExcreationPageComponent,
    AboutPageComponent,
    PostsploitPageComponent,
    ForumPageComponent,
    TutorialsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
