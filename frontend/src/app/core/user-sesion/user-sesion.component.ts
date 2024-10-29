import { DatePipe, NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { obPadding } from '@styles/ob-box-model.tv';

@Component({
  selector: 'app-user-sesion',
  standalone: true,
  imports: [NgClass, NgOptimizedImage, DatePipe],
  templateUrl: './user-sesion.component.html',
  styleUrl: './user-sesion.component.scss',
})
export class UserSesionComponent {
  obPadding = obPadding;
  username = localStorage.getItem('accountNames') || 'Anónimo';

  @Input({ required: true }) name = '';
  date = Date.now();
}
