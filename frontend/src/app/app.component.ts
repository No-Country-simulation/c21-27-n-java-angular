import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@core/footer/footer.component';
import { NavbarMobileComponent } from './core/navbar-mobile/navbar-mobile.component';
import { obPadding } from '@styles/ob-box-model.tv';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarMobileComponent, FooterComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  obPadding = obPadding;
}
