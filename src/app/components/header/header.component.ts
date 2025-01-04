import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categories: any[] = [];
  isMenuOpen: boolean = false;
  searchQuery: string = '';

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.getCategories().subscribe((response) => {
      this.categories = response.genres;
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log(this.searchQuery, 'query');
      this.router.navigate(['/search', this.searchQuery]);
      this.searchQuery = '';
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  nav(): void {
    this.router.navigate(['']);
  }

  selectCategory(category: any): void {
    this.toggleMenu(); // Close the menu when a category is selected
    this.router.navigate(['/category', category.id], {
      queryParams: { name: category.name },
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const drawerElement = document.querySelector('.drawer');
    const headerElement = document.querySelector('.app-header');
    const isClickInside =
      drawerElement?.contains(event.target as Node) ||
      headerElement?.contains(event.target as Node);

    if (!isClickInside && this.isMenuOpen) {
      this.isMenuOpen = false; // Close the drawer if click is outside
    }
  }
}
