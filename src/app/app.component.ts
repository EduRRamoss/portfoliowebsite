import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eduardorrportfolio';

  showFiller = false;


  images = [
    'https://cdn-icons-png.flaticon.com/256/837/837529.png',
    'https://cdn-icons-png.flaticon.com/256/331/331761.png',
    'https://cdn-icons-png.flaticon.com/256/837/837529.png',
    'https://cdn-icons-png.flaticon.com/256/331/331761.png',
    'https://cdn-icons-png.flaticon.com/256/837/837529.png',
    'https://cdn-icons-png.flaticon.com/256/331/331761.png',
    'https://cdn-icons-png.flaticon.com/256/837/837529.png',
    'https://cdn-icons-png.flaticon.com/256/331/331761.png',
    'https://cdn-icons-png.flaticon.com/256/837/837529.png',
    'https://cdn-icons-png.flaticon.com/256/331/331761.png',
    'https://cdn-icons-png.flaticon.com/256/837/837529.png',
    'https://cdn-icons-png.flaticon.com/256/331/331761.png',
    'https://cdn-icons-png.flaticon.com/256/837/837529.png',
    'https://cdn-icons-png.flaticon.com/256/331/331761.png',
    'https://cdn-icons-png.flaticon.com/256/837/837529.png',
    'https://cdn-icons-png.flaticon.com/256/331/331761.png',

  ];

  slideConfig = {
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 10000,
    dots: false,
    //cssEase: 'ease-in-out',
    arrows: false
  };

}