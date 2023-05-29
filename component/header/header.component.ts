import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';

  onSearch(): void {
    // Implement your search logic here
    console.log('Search query:', this.searchQuery);
  }
}
