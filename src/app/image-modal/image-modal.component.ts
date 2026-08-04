import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ImageModalComponent implements OnChanges {
  @Input() src: string | undefined;
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();

  isActive: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.isActive = !!changes.src.currentValue;
  }

  closeModal() {
    this.isActive = false;
    this.closed.emit();
  }
}
