import { HttpClient } from '@angular/common/http';

import {
  inject,
  Injectable,
  signal
} from '@angular/core';

import { AuthService } from '../services/auth.service';

import { TareaDto } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private http = inject(HttpClient);

  private authService = inject(AuthService);

  private _tareas = signal<TareaDto[]>([]);
}