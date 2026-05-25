import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
        name: 'diasRestantes',
        standalone: true
    })
    export class DiasRestantesPipe implements PipeTransform {

        transform(fechaLimite: string | null): string {

            if (!fechaLimite) {
            return 'Sin fecha límite';
        }

        const hoy = new Date();
        const limite = new Date(fechaLimite);

        const diferencia = limite.getTime() - hoy.getTime();
        const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

        if (dias < 0) return `Vencida hace ${Math.abs(dias)} días`;
        if (dias === 0) return 'Vence hoy';
        if (dias === 1) return 'Vence mañana';
        return `${dias} días restantes`;
    
    class DiasRestantesPipe implements PipeTransform {
       
       
        transform(value: any, ...args: any[]) {
            throw new Error('Method not implemented.');
        }

    }
    }
}