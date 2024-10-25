import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { OB_PADDING } from '@styles/obBoxes.tv';
import { OB_BUTTON_OUTLINED } from '@styles/obButtons.tv';
import { OB_TEXT_HEADINGS } from '@styles/obTexts.tv';
import { TransferCardComponent } from './components/transfer-card/transfer-card.component';
import { FEATURES } from '@config/paths';

@Component({
  selector: 'app-recents',
  standalone: true,
  imports: [NgClass, TransferCardComponent],
  templateUrl: './recents.component.html',
  styleUrl: './recents.component.scss',
})
export class RecentsComponent {
  path = FEATURES;

  obPadding = OB_PADDING;
  obHeading = OB_TEXT_HEADINGS;
  obButtonOutline = OB_BUTTON_OUTLINED;
}
