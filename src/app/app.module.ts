import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { CoreImageService } from './services/core-image.service';
import {AuthServiceService} from './services/auth-service.service';
import {AngularFireAuth} from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCmdMO3V4Fq1-3daPCjCMuVqK13c8g9jWM',
      authDomain: 'fir-demo-14caa.firebaseapp.com',
      databaseURL: 'https://fir-demo-14caa.firebaseio.com',
      projectId: 'fir-demo-14caa',
      storageBucket: 'fir-demo-14caa.appspot.com',
    }),
    AngularFireStorageModule
],
  providers: [CoreImageService, AngularFireDatabase, AngularFireAuth, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
