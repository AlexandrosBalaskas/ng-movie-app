import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-search-page',
  imports: [CommonModule, MovieItemComponent, PaginationComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
  movies: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  query!: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.query = params['query'];
      this.fetchMovies();
    });
  }

  fetchMovies(): void {
    this.movieService
      .searchMovies(this.query, this.currentPage)
      .subscribe((response) => {
        this.movies = response.results;
        this.totalPages = response.total_pages;
      });
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.fetchMovies();
  }
}
