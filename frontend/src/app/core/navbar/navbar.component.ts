import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
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
              if (entry.isIntersecting) {
                this.elRef.nativeElement.style.position = 'absolute';
              } else {
                this.elRef.nativeElement.style.position = 'fixed';
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
