import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { CoreImageService } from './services/core-image.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCmdMO3V4Fq1-3daPCjCMuVqK13c8g9jWM',
      authDomain: 'fir-demo-14caa.firebaseapp.com',
      databaseURL: 'https://fir-demo-14caa.firebaseio.com',
      projectId: 'fir-demo-14caa',
      storageBucket: 'fir-demo-14caa.appspot.com',
    }),
    AngularFireStorageModule
],
  providers: [CoreImageService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
