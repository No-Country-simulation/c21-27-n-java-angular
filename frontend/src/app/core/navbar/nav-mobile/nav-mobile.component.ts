import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UI_Button_Black } from '../../../styles/buttonHomeNegro';
import { UI_Button } from '../../../styles/buttonHomeVerde';


@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss',
})
export class NavMobileComponent {
  

}
