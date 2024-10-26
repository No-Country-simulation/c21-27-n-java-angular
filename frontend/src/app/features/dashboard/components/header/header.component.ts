import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { OB_TEXT_HEADINGS } from '@styles/ob-text.tv';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  obHeading = OB_TEXT_HEADINGS;
}
