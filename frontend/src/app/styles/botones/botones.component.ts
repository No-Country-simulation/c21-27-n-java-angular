import { Component } from '@angular/core';
import { UI_Button } from '../buttonHomeVerde';
import { UI_Button_Black } from '../buttonHomeNegro';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.scss'
})
export class BotonesComponent {
  uiButton = UI_Button;
  uiButtonBlack = UI_Button_Black;
}
