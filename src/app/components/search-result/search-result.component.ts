import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importar para ngFor, ngClass y pipes como date
import { FormsModule } from '@angular/forms'; // ✅ Importar para ngModel
import { Result } from '../../interface/data/result';
import { DataService } from '../../service/data.service';
import { SearchFormConnectorService } from '../../service/search-form-connector.service';
import { SearchService } from '../../service/search.service';
import { FilterPipe } from '../../pipes/filter.pipe'; // ✅ Importar el pipe personalizado

@Component({
  selector: 'app-search-result',
  standalone: true, // ✅ Convertido a standalone
  imports: [CommonModule, FormsModule, FilterPipe], // ✅ Importaciones necesarias, incluyendo el pipe
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  filterResults = '';
  results: Result[] = [];
  activityType: string[] = ['Documentos administrativos', 'Oferta técnica', 'Antecedentes de seguridad', 'Antecedentes Calidad', 'Antecedentes Económica'];
  selectedActivityType: string = '';

  constructor(private dataService: DataService, private searchFormConnectorService: SearchFormConnectorService, private searchService: SearchService) {}

  viewResult(result: Result) {
    this.searchFormConnectorService.setSelectedResult(result);
  }

  ngOnInit() {
    this.results = this.dataService.getResults();
    const item = this.results.find(result => result.id === 13984);

    if (item) {
      console.log(item);
    }
  
    this.searchService.currentSearchInput.subscribe(value => {
      this.filterResults = value;
    });
  }

  confirmChange(event: Event, item: Result) {
    let tempState = (event.target as HTMLInputElement).checked;
  
    if (!item.state && tempState) {
      if (confirm('¿Está seguro que desea dar por concluido?')) {
        item.state = tempState;
        if (item.state) {
          item.deliverDate = new Date().toISOString().split('T')[0];
        }
        console.log(item);
      }
    }

    if (item.state === undefined) {
      (event.target as HTMLInputElement).checked = false;
    } else {
      (event.target as HTMLInputElement).checked = item.state;
    }
  }

  getIconState(item: Result): {icon: string, color: string} {
    if (item.state) {
      return { icon: 'far fa-check-circle', color: 'icon-success' };
    }

    if (!item.endDate) {
      return { icon: 'fas fa-circle', color: 'icon-neutral' };
    }

    const end = new Date(item.endDate);
    const now = new Date();
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    if (diff > 7) {
      return { icon: '', color: '' };
    } else if (diff > 0) {
      return { icon: 'fas fa-exclamation-circle', color: 'icon-warning' };
    } else {
      return { icon: 'far fa-times-circle', color: 'icon-alert' };
    }
  }

  subtractDays(dateString: string | undefined, days: number): string {
    if (!dateString) {
      return '';
    }
    let date = new Date(dateString);
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0];
  }
}
