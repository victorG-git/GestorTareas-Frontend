import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-tarea-card',
  imports: [],
  templateUrl: './tarea-card.html',
  styleUrl: './tarea-card.css',
})

export class TareaCard {

  titulo = "titulo-tarea";
}
/*
export class TareaCardComponent {

  @Input() tarea!: TareaCardComponent;

  @Output() completar = new EventEmitter<number>();

  @Output() eliminar = new EventEmitter<number>();

  onCompleta(): void {
    this.completar.emit(this.tarea.id);
  }
}*/
