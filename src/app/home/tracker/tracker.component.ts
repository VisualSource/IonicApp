import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit {
  @Input() pages = 0;
  @Input() currentPage = 1;
  constructor() { }
  ngOnInit() {}
}
