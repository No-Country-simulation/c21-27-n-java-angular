import { CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { SubNavMobileComponent } from '../../core/sub-nav-mobile/sub-nav-mobile.component';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CurrencyPipe, NgClass, SubNavMobileComponent],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss',
})
export class TransferComponent {}
