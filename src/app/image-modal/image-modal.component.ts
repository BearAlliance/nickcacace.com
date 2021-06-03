import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnChanges {
  @Input() src: string;
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();

  isActive: boolean;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.isActive = !!changes.src.currentValue;
  }

  closeModal() {
    this.isActive = false;
    this.closed.emit();
  }
}
