import { dateTimestampProvider } from "rxjs/internal/scheduler/dateTimestampProvider";

export interface TareaDto {
    id: number;
    titulo: string;
    descripcion: string;

    fechaCreacion: Date;
    fechaFinalizacion?: Date;
    fechaLimite?: Date;

    estado: string;
    prioridad: string;

    usuarioId: number;
    nombreUsuario: string;

    tipoTarea: string;

    frecuenciaDias?: number;
    proximaEjecucion?: Date;

    tareaPadreId?: number;

    idsSubtareas: number[];
}

export interface UsuarioDto {
    id:number;
    nombre:string;
    email:string;
    esAdmin:boolean;
    fechaCreacion:Date;
    activo:boolean;
    totalTareas:number;
}

export interface PaginadoDto<T> {
    datos:T[];
    paginaActual:number;
    totalPaginas:number;
    totalRegistros:number;
    registrosPorPagina:number;
}

export interface CrearTareaDto {
    titulo:string;
    descripcion:string;
    fechaLimite:Date;
    prioridad:boolean;
    usuarioId:number;
    tipoTarea:string;
    frecuenciaDias:number;
    tareaPadreId:number;
}

