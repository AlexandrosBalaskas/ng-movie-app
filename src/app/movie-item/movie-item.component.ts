import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent {
  @Input() movie: any; // Input movie data from parent component
  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/movie', this.movie.id]);
  }
}
