import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthServiceService {
  user: Observable<firebase.User>;

  constructor(private fAuth: AngularFireAuth) {
    this.user = this.fAuth.authState;
  }

  login() {
    this.fAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // //signInWithEmailAndPassword(email, password)
    //   .then(
    //     value => { console.log('logined'); }
    //   )
    //   .catch(err => {
    //     console.log('error:', err.message);
    //   });
  }

  logout() {
    this.fAuth.auth.signOut();
  }
}
