import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TareaDto } from '../models/tarea.model';
import { DiasRestantesPipe } from '../pipes/dias-restantes.pipe';
@Component({
    selector: 'app-tarea-card',
    standalone: true,
    imports: [DatePipe, DiasRestantesPipe],
    templateUrl: './tarea-card.component.html',
    styleUrl: './tarea-card.component.css'
})

export class TareaCardComponent {

    @Input() tarea!: TareaDto;

    @Output() completar = new EventEmitter<number>();

    @Output() eliminar =new EventEmitter<number>();

    onCompletar(): void {

        this.completar.emit(this.tarea.id);
    }

    onEliminar(): void {

        this.eliminar.emit(this.tarea.id);
    }
}