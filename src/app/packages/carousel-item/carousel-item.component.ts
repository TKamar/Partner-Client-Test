import { Component, Input, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/users/carousel/carousel.service';
import { CarouselSlider } from '../carousel/carousel.component';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {

  @Input() item: any;

  public sliderList: CarouselSlider[] = []


  constructor(private carouselService: CarouselService) {
    this.sliderList = carouselService.getSlidersList();
  }

  ngOnInit(): void {
  }

}
