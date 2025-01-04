import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/popular?api_key=${environment.tmdbApiKey}`
    );
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/top_rated?api_key=${environment.tmdbApiKey}`
    );
  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/upcoming?api_key=${environment.tmdbApiKey}`
    );
  }

  getCategories(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/genre/movie/list?api_key=${environment.tmdbApiKey}`
    );
  }

  getMoviesByCategory(categoryId: number, page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${environment.tmdbApiKey}&with_genres=${categoryId}&page=${page}`
    );
  }

  searchMovies(query: string, page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${environment.tmdbApiKey}&query=${query}&page=${page}`
    );
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${id}?api_key=${environment.tmdbApiKey}`
    );
  }

  getMovieTrailer(movieId: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${movieId}/videos?api_key=${environment.tmdbApiKey}`
    );
  }
}
