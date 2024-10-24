import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { OB_TEXT_HEADINGS } from '@styles/obTexts.tv';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class DashboardHeaderComponent {
  obHeading = OB_TEXT_HEADINGS;
}
