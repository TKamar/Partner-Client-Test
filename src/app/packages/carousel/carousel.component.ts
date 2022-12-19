import { Component, HostListener, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  private items = [0, 0, 0];
  private startIndex: number = 0;
  private itemsToShow: number = 0;



  constructor() { }


  private setItemsToShow(innerWidth: number): void {
    if (innerWidth > 1024) {
      this.itemsToShow = 3;
    }
    else if (innerWidth > 640) {
      this.itemsToShow = 2;
    }
    else
      this.itemsToShow = 1;
  }

  public getItems() {
    return this.items.slice(this.startIndex, this.itemsToShow + this.startIndex);
  }

  @HostListener('window:resize')
  onResize() {
    this.setItemsToShow(window.innerWidth);
  }

  ngOnInit() {
    this.setItemsToShow(window.innerWidth);
  }

}
