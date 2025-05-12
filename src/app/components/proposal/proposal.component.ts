import { Component } from '@angular/core';
import { SearchFormConnectorService } from '../../service/search-form-connector.service';
import { Result } from '../../interface/data/result';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.css',
})
export class ProposalComponent {

  person: Result = {
    id: undefined,
    details: '',
    responsible: '',
    endDate: '',
    email: '',
    array:[],
  };
  
  // Boton Añadir - Variables para los campos de entrada
  name = '';
  occupation = '';
  email = '';
  showInputs = false; // Variable para controlar si se muestran los campos de entrada
  id = 0; // Variable para el ID único de cada elemento del array
  array: { id: number; name: string; occupation: string; email: string }[] = []; // Array para almacenar los elementos añadidos(evaluar cambiar nombre)

  constructor(private searchFormConnectorService:SearchFormConnectorService) {}

  ngOnInit() {
    // Sucripcion al Observable del registro seleccionado.
    this.searchFormConnectorService.getSelectedResult().subscribe(result => {
      this.person = result;
    });
  }

  // Función para mostrar los campos de entrada
  addInputs() {
    this.showInputs = true;
  }

  // Función para añadir los campos de entrada al array y borrarlos
  addContact() {
    this.array.push({
      id: this.id++,
      name: this.name,
      occupation: this.occupation,
      email: this.email,
    });
    console.log(this.array);
    this.name = '';
    this.occupation = '';
    this.email = '';
    this.showInputs = false;
  }

  // Función para cancelar los campos de entrada(eliminar los imputs)
  cancelContact() {
    this.name = '';
    this.occupation = '';
    this.email = '';
    this.showInputs = false;
  }

  //funcion para eliminar elementos del array de contactos a notificar
  deleteArrayElement(i: number) {
    this.array.splice(i, 1);
  }

  //Funcion para comprobar correo, usando expresiones regulares
  isValidEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
