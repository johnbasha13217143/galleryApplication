import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/shared/models/common.model';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryData: Gallery[] = [];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.getGalleryData();
  }

  getGalleryData(): void {
    this.mainService.getGalleryImages().subscribe((g: Array<Gallery>) => {
      this.galleryData = g;
    })
  }
}
