import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      edad: [0, [Validators.required, Validators.min(0)]]
    });
  }

  verificarEdad() {
    if (this.formulario.valid) {
      const edad = this.formulario.get('edad')?.value;
      if (edad !== null && edad !== undefined) {
        const esMayorEdad = edad >= 18;
  
        if (esMayorEdad) {
          alert('El usuario es mayor de edad');
        } else {
          alert('El usuario es menor de edad');
        }
      }
    }
  }
}
