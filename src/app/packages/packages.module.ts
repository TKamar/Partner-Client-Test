import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackgesPageComponent } from './packges-page/packges-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { AdvantagesComponent } from './advantages/advantages.component';



@NgModule({
  declarations: [
    PackgesPageComponent,
    CarouselComponent,
    CarouselItemComponent,
    AdvantagesComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    PackgesPageComponent
  ]
})
export class PackagesModule { }
