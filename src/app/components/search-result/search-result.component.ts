// import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Result } from '../../interface/data/result';
import { DataService } from '../../service/data.service';
import { SearchFormConnectorService } from '../../service/search-form-connector.service';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})

export class SearchResultComponent {

  // Variable para almacenar los resultados del filtro(input buscador)
  filterResults = '';

  results: Result[] = []; //aqui se guardan los resultados de la busqueda, puse el mismo nombre a la variable results que se utiliza en el data service

  activityType: string[] = ['Documentos administrativos', 'Oferta tecnica', 'Antecedentes de seguridad', 'Antecedentes Calidad', 'Antecedentes Economica']; //opciones del select
  selectedActivityType: string = ""; //variable para almacenar el tipo de actividad seleccionado


  constructor(private dataService:DataService, private searchFormConnectorService:SearchFormConnectorService, private searchService: SearchService ){} //inyecte el servicio data al constructor para usar los datos de results (bd) y el searchFormConnectorService para usar los datos de la busqueda para la conexion entre los resultados de busqueda y el formulario

  viewResult(result: Result) {
    this.searchFormConnectorService.setSelectedResult(result);
  }

  ngOnInit() {

    // Obtener los datos del servicio "data" y guardarlos en la variable results
    this.results = this.dataService.getResults(); 

    const item = this.results.find(result => result.id === 13984);

  // Si encontramos el registro, lo mostramos en la consola
  if (item) {
    console.log(item);
  }
  
    // suscripcion al Observable del servicio SearchService para ver los cambios en la variable filterResults
    this.searchService.currentSearchInput.subscribe(value => {
      this.filterResults = value;
    });
  }

  //metodo para asignar un estado a un detalle en la propuesta, pregunta al usuario si quiere cambiarlo o no.
  confirmChange(event: Event, item: Result) {
    
    // Guardamos el estado actual del switch en una variable temporal
    let tempState = (event.target as HTMLInputElement).checked;
  
    // Si el estado actual del item es false y el estado del switch es true, es decir, el usuario quiere cambiar el estado a true
    if (!item.state && tempState) {
      // Mostramos un mensaje de confirmación al usuario
      if (confirm('¿Está seguro que desea dar por concluido?')) {
        // Si el usuario confirma, cambiamos el estado del item a true
        item.state = tempState;
        // Y si el estado es true, establecemos deliverDate a la fecha actual
        if (item.state) {
          item.deliverDate = new Date().toISOString().split('T')[0];
        }
        console.log(item); //dejo esto para ver en consola el cambio de la propiedad deliverDate, borrar mas tarde
      }
    }
  
    // Si el estado del item es undefined, no cambiamos el valor de checked y lo dejamos en false
    if (item.state === undefined) {
      (event.target as HTMLInputElement).checked = false;
    } else {
      // Si el estado del item no es undefined, establecemos el valor de checked al estado del item
      (event.target as HTMLInputElement).checked = item.state;
    }
  }

  //metodo para Estado - determinar el estado del icono de alerta
  getIconState(item: Result): {icon: string, color: string} {
    // Si el estado es true, devolvemos 'fa-check-circle' (icono check-circle de color verde)
    if (item.state) {
      return {icon: 'far fa-check-circle', color: 'icon-success'};
    }
  
    // Si endDate es undefined, devolvemos 'fa-circle' (icono neutro)
    if (!item.endDate) {
      return {icon: 'fas fa-circle', color: 'icon-neutral'};
    }
  
    // Convertir endDate a un objeto Date
    const end = new Date(item.endDate);
    // Obtener la fecha actual
    const now = new Date();
  
    // Calcular la diferencia en días
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
  
    // Determinar el estado del icono
    if (diff > 7) {
      return {icon: '', color: ''}; // no mostramos ningún icono
      // return {icon: 'fas fa-circle', color: 'icon-neutral'}; // icono gris estado neutro
    } else if (diff > 0) {
      return {icon: 'fas fa-exclamation-circle', color: 'icon-warning'}; // icono de advertencia
    } else {
      return {icon: 'far fa-times-circle', color: 'icon-alert'}; // icono de alerta
    }
  }

  //**este metodo es para descontar dias, lo use para la fecha optima de entrega, es solo momentaneo para hacer test, borrar mas tarde**
  subtractDays(dateString: string | undefined, days: number): string {
    if (!dateString) {
      return '';
    }
    let date = new Date(dateString);
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0];  // Devuelve la fecha en formato 'yyyy-MM-dd'
  }
}
