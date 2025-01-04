import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  genres: string = '';
  trailerUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieService.getMovieDetails(movieId).subscribe((data) => {
        this.movie = data;

        this.genres = data.genres.map((genre: any) => genre.name).join(' ');

        this.movieService.getMovieTrailer(movieId).subscribe((trailerData) => {
          const trailer = trailerData.results.find(
            (item: any) => item.type === 'Trailer'
          );
          if (trailer) {
            this.trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
          }
        });
      });
    }
  }
  goBack(): void {
    window.history.back();
  }
}
