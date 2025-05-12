import { Injectable } from '@angular/core';
import { Result } from '../interface/data/result';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchFormConnectorService {

  //variable para almacenar el registro seleccionado en la busqueda
  private selectedResult = new BehaviorSubject<Result>({
    id: undefined,
    details: '',
    responsible: '',
    state: undefined,
    discarded: [],
    endDate: '',
    email: ''
  });

  constructor() { }

  // Este método se llama cuando se hace clic en el botón "Ver".
  // Almacena el registro seleccionado en el BehaviorSubject.
  setSelectedResult(result: Result) {
    this.selectedResult.next(result);
  }

  //Método para obtener el registro seleccionado del BehaviorSubject.
  // Devuelve un Observable para que otros componentes puedan suscribirse a él.
  getSelectedResult() {
    return this.selectedResult.asObservable();
  }
}
