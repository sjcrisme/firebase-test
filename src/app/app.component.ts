import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask, AngularFireStorageModule } from 'angularfire2/storage';
import { CoreImageService } from './services/core-image.service';
import { ImageGalleryModel } from './models/imageGallery.model';
import { Observable } from 'rxjs/Observable';
import {AuthServiceService} from './services/auth-service.service';
import {isUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {

   email: string;
  // password: string;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  images: Observable<ImageGalleryModel[]>;

  constructor(private afStorage: AngularFireStorage,
              private imageService: CoreImageService,
              public authService: AuthServiceService) {
  }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  ngOnDestroy() { }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }

  signup() { }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  upload(event) {
    console.log(this.authService.uEmail);
    debugger;
    const id = Math.random().toString(32).substring(2);
    this.ref = this.afStorage.ref(id);

     this.task = this.ref.put(event.target.files[0]);

     this.task.then(
       respond => this.imageService
         .saveDbImagesData(respond.downloadURL, respond.metadata.name, respond.metadata.timeCreated, this.authService.uEmail | '' ) // console.log('$', e.downloadURL)
     );
    console.log(this.task.task);
  }
}
