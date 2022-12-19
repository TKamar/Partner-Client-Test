import { Injectable } from '@angular/core';
import { CarouselSlider } from 'src/app/packages/carousel/carousel.component';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private list: CarouselSlider[] = [];

  constructor() { }

  public initList(list: CarouselSlider[]) {
    this.list = list;
  }

  public getSlidersList(): CarouselSlider[] {
    return this.list;
  }

}
