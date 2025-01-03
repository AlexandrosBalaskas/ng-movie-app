import { MovieSectionComponent } from '../../movie-section/movie-section.component';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  imports: [MovieSectionComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  popularMovies: any[] = [];
  topRatedMovies: any[] = [];
  upcomingMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchPopularMovies();
    this.fetchTrendingMovies();
    this.fetchUpcomingMovies();
  }

  fetchPopularMovies(): void {
    this.movieService.getPopularMovies().subscribe((response) => {
      this.popularMovies = response.results;
    });
  }

  fetchTrendingMovies(): void {
    this.movieService.getTopRatedMovies().subscribe((response) => {
      this.topRatedMovies = response.results;
    });
  }

  fetchUpcomingMovies(): void {
    this.movieService.getUpcomingMovies().subscribe((response) => {
      this.topRatedMovies = response.results;
    });
  }
}
