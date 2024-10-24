import { Component } from '@angular/core';
import { PATHS } from '@config/paths';
import { ObButtonCircleComponent } from '@shared/components/ob-button-circle/ob-button-circle.component';
import { OB_TEXT_BALANCE } from '@styles/obTexts.tv';

@Component({
  selector: 'app-shortcuts',
  standalone: true,
  imports: [ObButtonCircleComponent],
  templateUrl: './shortcuts.component.html',
  styleUrl: './shortcuts.component.scss',
})
export class ShortcutsComponent {
  routePaths = PATHS;
  transferPath = PATHS.FEATURES.TRANSFER.path;
  transactionsHistoryPath = PATHS.FEATURES.TRANSACTIONS.HISTORY.path;
}
