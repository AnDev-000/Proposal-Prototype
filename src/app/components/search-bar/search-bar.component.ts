import { Component } from '@angular/core';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  filterResults = '';

  constructor(private searchService: SearchService) { }

  // searchInput = "";
  
  // Método para buscar
  search() {
    this.searchService.changeSearchInput(this.filterResults);
  }
}

