import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

interface IIonSlide {
  getActiveIndex: () => Promise<number>;
  getPreviousIndex: () => Promise<number>;
  getSwiper: () => Promise<any>;
  isBeginning: () => Promise<boolean>;
  isEnd: () => Promise<boolean>;
  length: () => Promise<number>;
  slideTo: (index: number, speed?: number | undefined, runCallbacks?: boolean | undefined) => Promise<void>;
  slideNext: (speed?: number | undefined, runCallbacks?: boolean | undefined) => Promise<void>;
  slidePrev: (speed?: number | undefined, runCallbacks?: boolean | undefined) => Promise<void>;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  //https://stackoverflow.com/questions/63524568/how-to-get-swiper-instance-from-getswiper-in-ionic5-and-angular
  @ViewChild(IonSlides) slides: IIonSlide;
  activePage = 1;
  pages = 0;
  constructor() {
    this.setSlide = this.setSlide.bind(this);
  }
  ngAfterViewInit(){}
  ngOnInit() {}
  get slideOpts(){
    return {
      initialSlide: 0,
      speed: 400,
    };
  };
  slidesDidLoad(){
    this.slides.length().then(length=>{ console.log(length); this.pages = length - 2; });
    this.slides.getActiveIndex().then(index=>{ this.setActivePage(index); });
  }
  setActivePage(value){
    if(value === 0) {
      //@ts-ignore
      this.activePage = 'I';
      return;
    }
    if(value === 1) {
      //@ts-ignore
      this.activePage = 'II';
      return;
    }
    this.activePage = value + 1 - 2;
  }
  setSlide(index: number){
    this.slides.slideTo(index);
  }
  slideChanged(){
    this.slides.getActiveIndex().then(value=>{this.setActivePage(value);});
  }
  openTOC(){
    this.setSlide(1);
  }
  nextPage(){
    this.slides.slideNext();
  };
  lastPage(){
    this.slides.slidePrev();
  };
}
