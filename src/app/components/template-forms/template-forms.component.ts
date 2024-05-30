import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

  
  notas: NotasForm = {
    nota1: '',
    nota2: '',
    nota3: ''
  };

  promedio: number | null = null;

  constructor() {}

  submit() {
    const { nota1, nota2, nota3 } = this.notas;
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      this.promedio = (n1 + n2 + n3) / 3;
      console.log(`Promedio: ${this.promedio}`);
    } else {
      console.log("Todas las notas deben ser ingresadas como números.");
    }
  }
  
  }

  interface NotasForm {
    nota1: string;
    nota2: string;
    nota3: string;
  } 

  
