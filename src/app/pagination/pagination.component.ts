// pagination.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() currentPage: number = 1; // Current page number
  @Input() totalPages: number = 1; // Total pages available
  @Output() pageChanged = new EventEmitter<number>(); // Emit page change event

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1); // Emit the previous page number
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChanged.emit(this.currentPage + 1); // Emit the next page number
    }
  }
}
