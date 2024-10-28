import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transfer-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transfer-error.component.html',
  styleUrl: './transfer-error.component.scss',
})
export class TransferErrorComponent {
  @Input({ required: true }) active = false;
  @Input({ required: true }) message = '';
}
