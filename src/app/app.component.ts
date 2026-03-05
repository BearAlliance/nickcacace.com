import { Component, ViewEncapsulation } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ShellComponent],
})
export class AppComponent {}
