// guards/no-auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from
'@angular/router';
import { AuthService } from '../services/auth.service';

export const noAuthGuard: CanActivateFn = () => {
const authService = inject(AuthService);
const router = inject(Router);

if (!authService.estaAutenticado()) {
// No está autenticado — puede acceder al login
return true;
}

// Ya está autenticado — redirigir a tareas
return router.createUrlTree(['/tareas']);
};