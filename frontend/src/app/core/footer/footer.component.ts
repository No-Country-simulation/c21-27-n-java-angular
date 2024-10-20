import { Component } from '@angular/core';
import { UserSocialComponent } from './components/user-social/user-social.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [UserSocialComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  users = [
    {
      name: 'Avedaño Andres',
      role: 'Backend Developer',
      in: 'https://www.linkedin.com/in/andr%C3%A9s-avenda%C3%B1o-25100a73/',
    },
    {
      name: 'Betancur Andres',
      role: 'Frontend Developer',
      in: 'https://www.linkedin.com/in/felix-andres-betancur-9389ab1a5/',
    },
    {
      name: 'Romero Nicolas',
      role: 'Frontend Developer',
      in: 'https://www.linkedin.com/in/jnolmos/',
    },
    {
      name: 'Rúa Alejandro',
      role: 'Backend Developer',
      in: 'https://www.linkedin.com/in/alejandro-rua/',
    },
    {
      name: 'Soto Paguay Jesus',
      role: 'Frontend Developer',
      in: 'https://www.linkedin.com/in/sotopaguayj',
    },
    {
      name: 'Christian Gutman',
      role: 'Team Leader',
      in: '#',
    },
  ];
}
