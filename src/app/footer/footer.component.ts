import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class FooterComponent implements OnInit {
  constructor() {
    this.currentYear = 0;
  }

  currentYear: number;

  ngOnInit() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }
}
