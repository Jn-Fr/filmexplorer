import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slidesshow',
  templateUrl: './cast-slidesshow.component.html',
  styleUrls: ['./cast-slidesshow.component.css']
})
export class CastSlidesshowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[] | any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.cast);
  }

  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
