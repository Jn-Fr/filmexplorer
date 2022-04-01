import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies:Movie[] | undefined;

  public mySwiper: Swiper | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });

    // swiper.slideNext();

  }

  ngOnInit(): void {
  }

  onSlideNext(){
    this.mySwiper?.slideNext();
  }

  onSlidePrevious(){
    this.mySwiper?.slidePrev();
  }

}
