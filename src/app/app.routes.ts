import { Routes } from '@angular/router';
import {authGuard} from './/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',

        loadComponent: () => 
            import('./components/login.component')
            .then(m=>m.LoginComponent)
        
    },
    {
        path: 'tareas',
        canActivate:[authGuard],
        loadComponent:() =>
            import('.//components/tareas-list/tareas-list.component')
            .then(m =>m.TareasListComponent)
    },
    {
        path: 'tareas/:id',
        canActivate: [authGuard],
        loadComponent: () =>
            import('.//components/tareas-list/tareas-list.component')
            .then(m=>m.TareasListComponent)
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
    },
    {
        path:'**',
        redirectTo:'login'
    }
];
