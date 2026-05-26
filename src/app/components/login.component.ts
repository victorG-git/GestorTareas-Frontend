// login.component.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: '../login.component.html'
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    error: string = '';

    private router = inject(Router);
    private authService = inject(AuthService);

    onSubmit(): void {
        this.authService.login(this.email, this.password)
        .subscribe({
        next: () => {
        // Login correcto — navegar a la lista de tareas
        this.router.navigate(['/tareas']);
        },
        error: () => {
            this.error = 'Email o contraseña incorrectos';
        }
        });
    }
}