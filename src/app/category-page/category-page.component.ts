import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-category-page',
  imports: [CommonModule, MovieItemComponent, PaginationComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css',
})
export class CategoryPageComponent {
  movies: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  categoryId!: number;
  categoryName!: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params, 'par');
      this.categoryId = +params['id'];
      this.fetchMovies();
    });
    this.route.queryParams.subscribe((params) => {
      this.categoryName = params['name'];
    });
  }

  fetchMovies(): void {
    this.movieService
      .getMoviesByCategory(this.categoryId, this.currentPage)
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
