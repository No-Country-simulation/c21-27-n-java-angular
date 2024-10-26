import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sub-nav-mobile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sub-nav-mobile.component.html',
  styleUrl: './sub-nav-mobile.component.scss',
})
export class SubNavMobileComponent {
  @Input() page = '';
}
