import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {isUndefined} from "util";

@Injectable()
export class AuthServiceService {
  user: Observable<firebase.User>;
  uEmail: string;

  constructor(private fAuth: AngularFireAuth) {
    this.user = this.fAuth.authState;
    this.user.subscribe(
      x => {
        if (x !== undefined && x !== null) {
          this.uEmail = x.email;
        }
      });
  }

  login() {
    this.fAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.fAuth.auth.signOut();
    this.uEmail = null;
  }
}
