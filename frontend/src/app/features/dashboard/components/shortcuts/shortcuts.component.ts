import { Component } from '@angular/core';
import { FEATURES } from '@config/paths';
import { ObButtonCircleComponent } from '@shared/components/ob-button-circle/ob-button-circle.component';
import { OB_TEXT_BALANCE } from '@styles/ob-text.tv';

@Component({
  selector: 'app-shortcuts',
  standalone: true,
  imports: [ObButtonCircleComponent],
  templateUrl: './shortcuts.component.html',
  styleUrl: './shortcuts.component.scss',
})
export class ShortcutsComponent {
  transferPath = FEATURES.TRANSFER.path;
  transactionsHistoryPath = FEATURES.TRANSACTIONS.HISTORY.path;
}
