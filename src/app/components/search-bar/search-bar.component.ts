import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Necesario para directivas como *ngIf
import { FormsModule } from '@angular/forms'; // ✅ Necesario para ngModel
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-search-bar',
  standalone: true, // ✅ Convertido a standalone
  imports: [CommonModule, FormsModule], // ✅ Importar módulos esenciales
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  filterResults = ''; // ✅ Definir variable para evitar errores con ngModel

  constructor(private searchService: SearchService) {}

  search() {
    this.searchService.changeSearchInput(this.filterResults);
  }
}
