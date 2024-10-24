import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@core/footer/footer.component';
import { NavbarComponent } from '@core/navbar/navbar.component';
import { OB_PADDING } from '@styles/obBoxes.tv';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  obPadding = OB_PADDING;
}
