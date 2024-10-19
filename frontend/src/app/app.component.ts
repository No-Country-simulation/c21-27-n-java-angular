import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMobileComponent } from './core/navbar/nav-mobile/nav-mobile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMobileComponent],
  template: `<app-nav-mobile class="nav-mobile" /> <router-outlet />`,
})
export class AppComponent {}
