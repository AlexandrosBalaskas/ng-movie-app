import { Routes } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'category/:id', component: CategoryPageComponent },
  { path: 'search/:query', component: SearchPageComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  // Add more routes as needed
];
