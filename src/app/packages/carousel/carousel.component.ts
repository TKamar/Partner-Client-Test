import { Component, HostListener, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public items: CarouselSlider[] = [
    {
      img: '../assets/images/package_bg.png',
      packageDeal: 'החבילה הבסיסית',
      moneySymbol: '₪',
      price: 59,
      additionPrice: 9,
      dealDuration: 'לחודש',
      bodyFirstTitle: 'ללא הגבלת SMS שיחות והודעות',
      bodySecondTitle: 'חבילת גלישה בנפח 15GB',
      bodyThirdTitle: '100 דקות לחו"ל',
      bodyFirstInnerTitle: 'בלעדי למזמינים באתר',
      bodySecondInnerTitle: 'CyberGuard לשנה ללא עלות'
    },
    {
      img: '../assets/images/package_bg.png',
      packageDeal: 'החבילה המוזלת',
      moneySymbol: '₪',
      price: 49,
      additionPrice: 9,
      dealDuration: 'לחודש',
      bodyFirstTitle: 'ללא הגבלת SMS שיחות והודעות',
      bodySecondTitle: 'חבילת גלישה בנפח 10GB',
      bodyThirdTitle: 'מחיר קבוע לשנתיים',
      bodyFirstInnerTitle: 'בלעדי למזמינים באתר',
      bodySecondInnerTitle: 'המחיר נשאר לשנתיים'
    },
    {
      img: '../assets/images/package_bg.png',
      packageDeal: '',
      moneySymbol: '₪',
      price: 69,
      additionPrice: 9,
      dealDuration: 'לחודש',
      bodyFirstTitle: 'ללא הגבלת SMS שיחות והודעות',
      bodySecondTitle: 'חבילת גלישה בנפח 25GB',
      bodyThirdTitle: '1000 דקות לחו"ל',
      bodyFirstInnerTitle: 'בלעדי למזמינים באתר',
      bodySecondInnerTitle: 'כרטיס SIM במתנה'
    },];
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

export interface CarouselSlider {
  img: string,
  packageDeal: string,
  moneySymbol: string,
  price: number,
  additionPrice: number,
  dealDuration: string,
  bodyFirstTitle: string,
  bodySecondTitle: string,
  bodyThirdTitle: string,
  bodyFirstInnerTitle: string,
  bodySecondInnerTitle: string
}
