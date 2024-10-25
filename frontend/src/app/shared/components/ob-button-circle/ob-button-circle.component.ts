import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { obBtnCircle, ObButtonCircleTypes } from '@styles/ob-button.tv';

@Component({
  selector: 'app-ob-button-circle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ob-button-circle.component.html',
  styleUrl: './ob-button-circle.component.scss',
})
export class ObButtonCircleComponent {
  obButton = obBtnCircle;

  @Input() label = '';
  @Input() color: ObButtonCircleTypes['color'] = 'primary';
  @Input({ required: true }) href = '';
}
