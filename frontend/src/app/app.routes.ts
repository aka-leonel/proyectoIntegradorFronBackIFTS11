import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'notas',
        pathMatch: 'full'
    },
   
    {
        path: 'notas/:id',
        loadComponent: () =>
            import('./components/notas-detalle/notas-detalle.component')
            .then(m => m.NotasDetalleComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];