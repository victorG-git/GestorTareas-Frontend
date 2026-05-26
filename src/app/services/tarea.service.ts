import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  TareaDto,
  PaginadoDto,
  CrearTareaDto
} from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private http = inject(HttpClient);

  private baseUrl = 'https://localhost:7001/api';

  obtenerTareas() {

    return this.http.get<PaginadoDto<TareaDto[]>>(
      `${this.baseUrl}/tareas`
    ).pipe(

      map(respuesta => respuesta.datos),

      catchError(error => {

        console.error('Error al obtener tareas:', error);

        return of([] as TareaDto[]);
      })
    );
  }

  obtenerTareaPorId(id: number) {

    return this.http.get<TareaDto>(
      `${this.baseUrl}/tareas/${id}`
    );
  }

  crear(dto: CrearTareaDto) {

    return this.http.post(
      `${this.baseUrl}/tareas`,
      dto
    );
  }

  actualizar(id: number, dto: CrearTareaDto) {

    return this.http.put<void>(
      `${this.baseUrl}/tareas/${id}`,
      dto
    );
  }
}