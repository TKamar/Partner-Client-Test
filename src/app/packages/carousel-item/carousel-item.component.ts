import { Component, Input, OnInit } from '@angular/core';
import { CarouselSlider } from '../carousel/carousel.component';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {

  @Input() item: CarouselSlider;

  public sliderList: CarouselSlider[] = []


  constructor() { }

  ngOnInit(): void {
  }

}
