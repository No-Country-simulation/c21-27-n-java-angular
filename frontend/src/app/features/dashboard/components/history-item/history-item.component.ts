import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from '../recents/data.mock';
import { transferBody } from '../recents/components/transfer-card/transfer-card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
})
export class HistoryItemComponent implements OnInit {
  dataExists = signal(false);
  private router = inject(Router);

  data = signal<transferBody | null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const item = mockData.find((data) => data.id === id) || null;
      this.data.set(item);
      this.dataExists.set(item !== null);
    }
  }

  goBack() {
    this.router.navigate(['dashboard']);
  }
}
