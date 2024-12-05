import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IImage, IProject } from '../projects.constant';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: false,
})
export class ProjectComponent {
  @Input() project: IProject;
  @Input() selected: boolean;
  @Output() selectClick = new EventEmitter<void>();
  constructor() {}

  displayedImageSrc: string;

  onClicked() {
    this.selected = !this.selected;
    this.selectClick.emit();
  }

  displayImageModal(image: IImage) {
    this.displayedImageSrc = image.src;
  }

  clearDisplayedImage() {
    this.displayedImageSrc = undefined;
  }
}
