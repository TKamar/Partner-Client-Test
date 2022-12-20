import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  public advantagesList = [
    { img: "/assets/images/earth.png", text: "גלישה ב15,000 עמודי אינטרנט" },
    { img: "/assets/images/spiral.png", text: "534 שעות שיחה על גבי האינטרנט" },
    { img: "/assets/images/mail.png", text: "לשלוח 127,400 מיילים" },
    { img: "/assets/images/video.png", text: "6 שעות צפייה בוידאו באיכות HD" },
    { img: "/assets/images/chat.png", text: "לשלוח או לקבל 240,000 תמונות או 12,000,000 הודעות" },
    { img: "/assets/images/music.png", text: "לנגן 3984 שירים" },
    { img: "/assets/images/like.png", text: "לבלות 132 שעות ברשתות החברתיות" }, {}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface advantagesList {
  img: string,
  text: string
}
