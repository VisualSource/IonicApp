import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
})
export class ContentPageComponent implements OnInit {
  @Input() isChapterHeader = false;
  @Input() chapterName = '';
  @Input() chapterNumber = 0;
  @Input() img = '';
  @Input() alt = '';
  @Input() hasImg = false;
  constructor() { }

  ngOnInit() {}

}
