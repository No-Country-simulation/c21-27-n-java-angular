import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transfer-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './transfer-card.component.html',
  styleUrl: './transfer-card.component.scss',
})
export class TransferCardComponent {
  @Input({ required: true }) destination: string = '';
  @Input({ required: true }) amount: string = '';
}
