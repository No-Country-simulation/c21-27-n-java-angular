import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-social',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-social.component.html',
  styleUrl: './user-social.component.scss',
})
export class UserSocialComponent {
  data = input({
    name: '',
    role: '',
    in: '',
  });
}
