import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ImageGalleryModel } from './../models/imageGallery.model';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'firebase/storage';
import * as firebase from 'firebase';

@Injectable()
export class CoreImageService {
  private uid: string;
  constructor( // private afAuth: AngularFireAuth,
              private afDB: AngularFireDatabase) {
    // this.afAuth.authState.subscribe(auth => {
    //     if (auth !== undefined && auth != null) {
    //       this.uid = auth.uid;
    //     }
    // });
  }
  getImages(): Observable<ImageGalleryModel[]> {
     return this.afDB.list('/uploads').valueChanges();
  }
  saveDbImagesData(url, fName, timeCreated) {
    const itemsRef = this.afDB.list('/uploads');
    itemsRef.push({ name: fName, timeCreated: timeCreated, url: url});
  }
}
