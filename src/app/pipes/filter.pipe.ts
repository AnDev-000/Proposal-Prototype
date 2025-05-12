import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interface/data/result';

@Pipe({
  name: 'filter',
  standalone: true // ✅ Necesario en Angular 19
})
export class FilterPipe implements PipeTransform {

  // Método para remover los acentos
  removeAccents(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // Transformar el dato de entrada "results"
  transform(results: Result[], filterResults: string): Result[] {
    if (!results || !filterResults) {
      return results;
    }
  
    // Convertir el filterResults a minúsculas y remover los acentos
    const normalizedFilter = this.removeAccents(filterResults.toLowerCase());
  
    // Filtrar los resultados
    return results.filter(item => {
      if (normalizedFilter === 'entregado') {
        return item.state === true;
      } else if (normalizedFilter === 'no entregado') {
        return item.state === false;
      } else {
        return item.id?.toString().includes(normalizedFilter) ||
          item.details && this.removeAccents(item.details.toLowerCase()).includes(normalizedFilter) ||
          item.responsible && this.removeAccents(item.responsible.toLowerCase()).includes(normalizedFilter) ||
          item.state?.toString().includes(normalizedFilter);
      }
    });
  }
}
