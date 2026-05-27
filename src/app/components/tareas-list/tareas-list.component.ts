import { Component, OnInit, inject } from '@angular/core';

import { TareaCardComponent } from '../tarea-card.component';

import { TareaService } from '../../services/tareas.service';

@Component({
    selector: 'app-tareas-list',
    standalone: true,
    imports: [TareaCardComponent],
    templateUrl: './tareas-list.component.html'
})

export class TareasListComponent implements OnInit {

    tareaService = inject(TareaService);

    ngOnInit(): void {

        this.tareaService.cargarTareas().subscribe();
    }

    onCompletar(id: number): void {

        this.tareaService.completar(id).subscribe();
    }

    onEliminar(id: number): void {

        this.tareaService.eliminar(id).subscribe();
    }
}