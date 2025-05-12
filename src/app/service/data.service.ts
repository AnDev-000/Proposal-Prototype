import { Injectable } from '@angular/core';
import { Result } from '../interface/data/result';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //representacion de datos de una BD, mas adelante evaluar cambiar nombre.
  private results:Result[] = [
    { id: 13983, details: 'Detalle 1', responsible: 'Juan', activityType:'', state: false, discarded: ['2024-03-05','2024-03-08'], deliverDate: '', endDate:'2024-03-20' , email: 'juan@arcadis.com'},
    { id: 13984, details: 'FORM 1 IDENTIFICACIÓN DEL PROPONENTE FORM 1 IDENTIFICACIÓN DEL PROPONENTE FORM 1 IDENTIFICACIÓN DEL PROPONENTE FORM 1 IDENTIFICACIÓN DEL PROPONENTE FORM 1 IDENTIFICACIÓN DEL PROPONENTE FORM 1 IDENTIFICACIÓN DEL PROPONENTEFORM 1 IDENTIFICACIÓN DEL PROPONENTEFORM 1 IDENTIFICACIÓN DEL PROPONENTEFORM 1 IDENTIFICACIÓN DEL PROPONENTEFORM 1 IDENTIFICACIÓN DEL PROPONENTE',activityType:'Oferta tecnica', responsible: 'Pedro', state: false, discarded: ['2024-01-25','2024-01-20','2024-01-15'], endDate:'2024-03-17', email: 'pedro@arcadis.com'},
    { id: 13985, details: 'Detalle 2', responsible: 'Ana', activityType:'Documentos administrativos', state: false, discarded: ['2024-04-18','2024-04-10','2024-03-01'], deliverDate: '', endDate:'2024-02-08', email: 'ana@arcadis.com' },
    { id: 13986, details: 'compilacion 2', responsible: 'María', activityType:'Antecedentes Calidad', state: false, discarded: ['2024-03-05'],deliverDate: '', endDate:'2024-03-15', email: 'maria@arcadis.com' },
    { id: 13987, details: 'compilacion 1', responsible: 'Criss', state: true, activityType:'Oferta tecnica',  discarded: ['2024-03-05','2024-03-08'], deliverDate: '', endDate:'2024-03-15', email: 'criss@arcadis.com' },
    { id: 13988, details: 'compilacion 1', responsible: 'Pedro', state: true, activityType:'Antecedentes de seguridad', discarded: ['2024-03-05','2024-03-08'], deliverDate: '', endDate:'2024-03-15', email: 'pedro@arcadis.com' },
    { id: 13989, details: 'compilacion 1', responsible: 'Ana', state: true, activityType:'Antecedentes Economica', discarded: ['2024-03-05','2024-03-08'], deliverDate: '', endDate:'2024-03-15', email: 'ana@arcadis.com' },
    { id: 13990, details: 'compilacion 1', responsible: 'Cristian', activityType:'Antecedentes de seguridad', state: true, discarded: ['2024-03-05','2024-03-08'], deliverDate: '', endDate:'2024-03-15', email: 'cristian@arcadis.com' },
    { id: 13991, details: 'compilacion 1', responsible: 'Jose', activityType:'Documentos administrativos', state: true, discarded: ['2024-03-05','2024-03-08'], deliverDate: '', endDate:'2024-03-15', email: 'jose@arcadis.com' },
    { id: 13992, details: 'compilacion 1', responsible: 'Jorge', activityType:'Documentos administrativos', state: true, discarded: ['2024-03-05','2024-03-08'], deliverDate: '', endDate:'2024-03-15', email: 'jorge@arcadis.com' },
  ];

  constructor() { }

  getResults(): Result[] {
    return this.results;
  }
}
