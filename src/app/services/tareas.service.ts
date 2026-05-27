import { Injectable, signal } from '@angular/core';

import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';

import {
    catchError,
    map,
    of,
    tap
} from 'rxjs';

import { TareaDto } from '../models/tarea.model';

interface PaginadoDto {
    datos: TareaDto[];
}

@Injectable({
    providedIn: 'root'
})
export class TareaService {

    private baseUrl = 'https://localhost:7001/api';

    private cabeceras = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    private _tareas = signal<TareaDto[]>([]);

    private _cargando = signal(false);

    private _error = signal<string | null>(null);

    tareas = this._tareas.asReadonly();

    cargando = this._cargando.asReadonly();

    error = this._error.asReadonly();

    constructor(private http: HttpClient) { }

    cargarTareas() {

        this._cargando.set(true);

        this._error.set(null);

        return this.http.get<PaginadoDto>(
            `${this.baseUrl}/tareas`,
            { headers: this.cabeceras }
        ).pipe(

            map(respuesta => respuesta.datos),

            tap(tareas => {

                this._tareas.set(tareas);

                this._cargando.set(false);
            }),

            catchError(err => {

                console.error(err);

                this._error.set('Error cargando tareas');

                this._cargando.set(false);

                return of([]);
            })
        );
    }

    completar(id: number) {

        return this.http.put<void>(
            `${this.baseUrl}/tareas/${id}`,
            {},
            { headers: this.cabeceras }
        ).pipe(

            tap(() =>

                this._tareas.update(tareas =>

                    tareas.map(t =>

                        t.id === id
                            ? { ...t, estado: 'Completada' }
                            : t
                    )
                )
            ),

            catchError(err => this.manejarError(err))
        );
    }

    eliminar(id: number) {

        return this.http.delete<void>(
            `${this.baseUrl}/tareas/${id}`,
            { headers: this.cabeceras }
        ).pipe(

            tap(() =>

                this._tareas.update(tareas =>

                    tareas.filter(t => t.id !== id)
                )
            ),

            catchError(err => this.manejarError(err))
        );
    }

    private manejarError(error: any) {

        console.error('Error HTTP:', error);

        this._error.set('Ha ocurrido un error');

        return of(null);
    }
}