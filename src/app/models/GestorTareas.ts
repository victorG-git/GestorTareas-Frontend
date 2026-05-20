import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class TareaService {

    private http = inject(HttpClient);
//    private authService = inject(this.authService);

   // private _tareas = signal<TareaDto[]>([];)
}
