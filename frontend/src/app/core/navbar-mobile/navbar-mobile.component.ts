import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
})
export class NavbarMobileComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;
  private readonly maxWidth = 1024;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    if (window.innerWidth <= this.maxWidth) {
      const footer = document.querySelector('app-footer');

      if (footer) {
        this.observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // Encontra o elemento <nav> filho do elemento referenciado
              const navElement = this.elRef.nativeElement.querySelector('nav');
              if (navElement) {
                if (entry.isIntersecting) {
                  navElement.classList.add('footer-over');
                } else {
                  navElement.classList.remove('footer-over');
                }
              }
            });
          },
          {
            root: null,
            threshold: 0,
          }
        );

        this.observer.observe(footer);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
