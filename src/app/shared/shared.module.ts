import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectComponent, ImageModalComponent],
  exports: [ProjectComponent, ImageModalComponent]
})
export class SharedModule {}
