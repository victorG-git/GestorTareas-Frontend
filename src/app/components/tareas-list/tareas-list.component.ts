import { Component } from '@angular/core';
import { TareaCardComponent } from '../tarea-card.component';
import { TareaDto } from '../../models/tarea.model';

@Component({
    selector: 'app-tareas-list',
    standalone: true,
    imports: [TareaCardComponent],
    templateUrl: '../tarea-card.component.ts'
})
export class TareasListComponent {

    tareas: TareaDto[] = [
        {
            id: 1,
            titulo: 'Preparar informe trimestral',
            descripcion: 'Preparando informe',

            fechaCreacion: new Date(),
            fechaFinalizacion: undefined,
            fechaLimite: new Date(),

            estado: 'Pendiente',
            prioridad: 'Alta',

            usuarioId: 1,
            nombreUsuario: 'Ana Garcia',

            tipoTarea: 'Simple',

            frecuenciaDias: undefined,
            proximaEjecucion: undefined,

            tareaPadreId: undefined,

            idsSubtareas: []
        }
    ];

    onCompletar(id: number): void {

        const tarea = this.tareas.find(t => t.id === id);

        if (tarea) {
            tarea.estado = 'Completada';
        }
    }

    onEliminar(id: number): void {

        this.tareas = this.tareas.filter(t => t.id !== id);
    }
}