import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  standalone: true,
  imports: [RouterModule, TopNavComponent, FooterComponent],
})
export class ShellComponent {
  constructor() {}
}
