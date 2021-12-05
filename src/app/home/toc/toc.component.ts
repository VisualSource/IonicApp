import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss'],
})
export class TOCComponent implements OnInit {
  @Input() viewPage: (index: number) => void;
  constructor() { }

  ngOnInit() {}

}
