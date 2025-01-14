import { Component, model, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { fetchInstagramImages } from '../../../core/services/instagram.service';
import { CommonModule } from '@angular/common';
import { DatePicker, DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { PhotoService } from '../../../core/services/photo.service';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-gallery',
  imports: [GalleriaModule, CommonModule, DatePickerModule, FormsModule, CarouselModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  providers: [PhotoService]
})
export class GalleryComponent implements OnInit{

  images!: any[];
  filteredImages: any[] = [];
  filters: string[] = ['Todas', 'Paisagens', 'Retratos', 'Eventos'];
  selectedFilter: string = 'Todas';
  date: Date | undefined;
  displayCustom: boolean | undefined;
  selectedDate: Date | null = null;
  activeIndex: number = 0;

  

responsiveOptions: { breakpoint: string; numVisible: number }[] = [
  {
      breakpoint: '1024px',
      numVisible: 5
  },
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
];
carouselResponsiveOptions: any[] = [
  {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
  },
  {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
  },
  {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
  }
];
imageClick(index: number) {
  this.activeIndex = index;
  this.displayCustom = true;
}

galleriaResponsiveOptions: any[] = [
  {
      breakpoint: '1024px',
      numVisible: 5
  },
  {
      breakpoint: '960px',
      numVisible: 4
  },
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
];

  constructor(private photoService: PhotoService) {
    this.images = [
    { itemImageSrc: 'assets/images/galleria/mb/1.png', alt: 'Image 1', title: 'Title 1' },
    { itemImageSrc: 'assets/images/galleria/mb/2.png', alt: 'Image 2', title: 'Title 2' },
    { itemImageSrc: 'assets/images/galleria/mb/3.png', alt: 'Image 3', title: 'Title 3' },
    { itemImageSrc: 'assets/images/galleria/mb/4.png', alt: 'Image 3', title: 'Title 3' },
    { itemImageSrc: 'assets/images/galleria/mb/5.png', alt: 'Image 3', title: 'Title 3' },
    { itemImageSrc: 'assets/images/galleria/mb/6.png', alt: 'Image 3', title: 'Title 3' },
    { itemImageSrc: 'assets/images/galleria/mb/7.png', alt: 'Image 3', title: 'Title 3' },
    { itemImageSrc: 'assets/images/galleria/mb/8.png', alt: 'Image 3', title: 'Title 3' },
];
}

  async ngOnInit() {
    this.photoService.getImages().then(images => {
      this.images = images;
  });
  }

  
}