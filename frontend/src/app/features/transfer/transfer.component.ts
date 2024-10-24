import { CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CurrencyPipe, NgClass],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss',
})
export class TransferComponent {}
