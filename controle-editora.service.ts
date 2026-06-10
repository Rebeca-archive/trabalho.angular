import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Atlas' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Saraiva' }
  ];

  constructor() { }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    return this.editoras
      .filter(e => e.codEditora === codEditora)[0]
      .nome;
  }
}