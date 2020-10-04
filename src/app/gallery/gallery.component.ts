import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() title: string = 'Here goes the Gallery Title';
  @Input() photos: string[];

  current: number = 1;

  navigateGallery(index: number) {
    this.current = index;
  }
}
