import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule} from 'angularfire2/storage';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCmdMO3V4Fq1-3daPCjCMuVqK13c8g9jWM",
      authDomain: "fir-demo-14caa.firebaseapp.com",
      projectId: "fir-demo-14caa",
      storageBucket: "fir-demo-14caa.appspot.com",
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
