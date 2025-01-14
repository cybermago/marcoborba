import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})


export class PhotoService {

  constructor(private http: HttpClient) { }


  getImages() {
    return this.http.get<any>('assets/data/photos/photos.json')
        .toPromise()
        .then(res => res.data as Image[])
        .then(data => data);
}
  
}

