import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TrackerComponent } from './tracker/tracker.component';
import { CoverComponent } from './cover/cover.component';
import { TOCComponent } from './toc/toc.component';
import { ContentPageComponent } from './content-page/content-page.component';
//import { ChapterheadComponent } from './chapterhead/chapterhead.component';
//import { PageComponent } from './page/page.component';
import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,TrackerComponent,CoverComponent,TOCComponent,ContentPageComponent]
})
export class HomePageModule {}
