import { Routes } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SearchPageComponent } from './search-page/search-page.component';

export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'category/:id', component: CategoryPageComponent },
  { path: 'search/:query', component: SearchPageComponent },
  // Add more routes as needed
];
