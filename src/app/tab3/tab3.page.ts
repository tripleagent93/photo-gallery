import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ngOnInit() {
    this.photoService.loadSaved();
  };

  photos = this.photoService.photos
  constructor(public photoService: PhotoService) {}

}
