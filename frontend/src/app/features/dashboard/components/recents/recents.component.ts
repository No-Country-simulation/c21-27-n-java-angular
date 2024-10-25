import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { obPadding } from '@styles/ob-box-model.tv';
import { obBtnOutlined } from '@styles/ob-button.tv';
import { OB_TEXT_HEADINGS } from '@styles/ob-text.tv';
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

  obPadding = obPadding;
  obHeading = OB_TEXT_HEADINGS;
  obButtonOutline = obBtnOutlined;
}
