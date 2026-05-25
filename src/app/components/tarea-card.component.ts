import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TareaDto } from "../models/tarea.model";

@Component({
    selector:'app-tarea-card',
    standalone: true,
    imports: [],
    templateUrl: './tarea-card.component.html',
    styleUrl:'./tarea-card.component.css'
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