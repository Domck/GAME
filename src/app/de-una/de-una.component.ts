import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-de-una',
  templateUrl: './de-una.component.html',
  styleUrls: ['./de-una.component.css']
})
export class DeUnaComponent {
  textoBoton: string = 'NO';
  constructor(private router: Router) {}
  cambiarTexto(nuevoTexto: string) {
    this.textoBoton = nuevoTexto;
  }
  irADeAcuerdo(): void {
    this.router.navigate(['/de-acuerdo']); // Navega al componente DeAcuerdo
  }
}
