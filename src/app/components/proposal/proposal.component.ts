import { Component } from '@angular/core';
import { SearchFormConnectorService } from '../../service/search-form-connector.service';
import { Result } from '../../interface/data/result';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Importar FormsModule para ngModel

@Component({
  selector: 'app-proposal',
  standalone: true, // ✅ Convertido a standalone
  imports: [CommonModule, FormsModule], // ✅ Importar módulos esenciales
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css'],
})
export class ProposalComponent {

  person: Result = {
    id: undefined,
    details: '',
    responsible: '',
    endDate: '',
    email: '',
    array: [],
  };

  // Variables para los campos de entrada
  name = '';
  occupation = '';
  email = '';
  showInputs = false;
  id = 0;
  array: { id: number; name: string; occupation: string; email: string }[] = [];

  constructor(private searchFormConnectorService: SearchFormConnectorService) {}

  ngOnInit() {
    this.searchFormConnectorService.getSelectedResult().subscribe(result => {
      this.person = result;
    });
  }

  addInputs() {
    this.showInputs = true;
  }

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

  cancelContact() {
    this.name = '';
    this.occupation = '';
    this.email = '';
    this.showInputs = false;
  }

  deleteArrayElement(i: number) {
    this.array.splice(i, 1);
  }

  isValidEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
}
