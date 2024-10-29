import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transfer-card',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, RouterLink],
  templateUrl: './transfer-card.component.html',
  styleUrl: './transfer-card.component.scss',
})
export class TransferCardComponent {
  @Input() body: transferBody | null = null;
}

export interface transferBody {
  destination: string;
  amount: number;
  time: Date;
  id: string;
}
