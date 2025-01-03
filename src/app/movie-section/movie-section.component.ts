import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-movie-section',
  imports: [CommonModule, MovieItemComponent],
  templateUrl: './movie-section.component.html',
  styleUrl: './movie-section.component.css',
})
export class MovieSectionComponent {
  @Input() title!: string;
  @Input() movies!: { poster_path: string; title: string }[];
}
