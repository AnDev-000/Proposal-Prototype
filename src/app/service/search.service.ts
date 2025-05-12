import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // BehaviorSubject es un tipo especial de Subject que mantiene el valor actual.
  // Cada vez que se llama a next, todos los suscriptores del BehaviorSubject recibirán el nuevo valor.
  private searchInput = new BehaviorSubject<string>('');

  constructor() { }

  // Observable para el searchInput
  currentSearchInput = this.searchInput.asObservable();

  //Metodo para cambiar el searchInput
  changeSearchInput(termino: string) {
    this.searchInput.next(termino);
  }
}
