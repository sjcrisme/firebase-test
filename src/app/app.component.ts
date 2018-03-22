import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask, AngularFireStorageModule } from 'angularfire2/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private afStorage: AngularFireStorage) {  }
  upload(event){
    const id = Math.random().toString(32).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    
    console.log(event);
  }
}
