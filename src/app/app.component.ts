import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask, AngularFireStorageModule } from 'angularfire2/storage';
import { CoreImageService } from './services/core-image.service';
import { ImageGalleryModel } from './models/imageGallery.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  images: Observable<ImageGalleryModel[]>;

  constructor(private afStorage: AngularFireStorage,
              private imageService: CoreImageService) {  }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }
  ngOnChanges() {
    this.images = this.imageService.getImages();
  }

  upload(event) {
    const id = Math.random().toString(32).substring(2);
    this.ref = this.afStorage.ref(id);

     this.task = this.ref.put(event.target.files[0]);
     this.task.then(
       respond => this.imageService.saveDbImagesData(respond.downloadURL, respond.metadata.name, respond.metadata.timeCreated) // console.log('$', e.downloadURL)
     );
    console.log(this.task.task);
  }
}
