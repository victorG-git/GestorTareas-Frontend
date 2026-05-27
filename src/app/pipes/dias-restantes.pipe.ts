import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'diasRestantes',
    standalone: true
})
export class DiasRestantesPipe implements PipeTransform {

    transform(fecha: Date | string | null | undefined): string {

        if (!fecha) {
            return 'Sin fecha límite';
        }

        const fechaLimite = new Date(fecha);
        const hoy = new Date();

        const diferenciaMs =
            fechaLimite.getTime() - hoy.getTime();

        const dias =
            Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

        if (dias > 1) {
            return `${dias} días restantes`;
        }

        if (dias === 1) {
            return 'Vence mañana';
        }

        if (dias === 0) {
            return 'Vence hoy';
        }

        return `Vencida hace ${Math.abs(dias)} días`;
    }
}