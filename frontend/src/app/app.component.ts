import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { tv } from 'tailwind-variants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'c21';
  button = tv({
    base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
    variants: {
      color: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-purple-500 text-white',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'px-4 py-3 text-lg',
      },
    },
    compoundVariants: [
      {
        size: ['sm', 'md'],
        class: 'px-3 py-1',
      },
    ],
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  });
}
