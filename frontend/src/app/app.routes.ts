import { Routes } from '@angular/router';
import { NotasListComponent } from './components/notas-list/notas-list.component';
import { NotasDetalleComponent } from './components/notas-detalle/notas-detalle.component';


export const routes: Routes = [
    { path: '', redirectTo: 'notas', pathMatch: 'full'         
    }, 
    { path: 'notas',   loadComponent: () =>
            import('./components/notas-list/notas-list.component')
            .then(m => m.NotasListComponent)
         },
    {
        path: 'notas/nueva',
        loadComponent: () =>
            import('./components/notas-form/notas-form.component')
            .then(m => m.NotasFormComponent)
    },
    {
        path: 'notas/editar/:id',
        loadComponent: () =>
            import('./components/notas-form/notas-form.component')
            .then(m => m.NotasFormComponent)
    },     
    {   path: 'notas/:id',
        loadComponent: ()=>
            import('./components/notas-detalle/notas-detalle.component')
            .then(m=> m.NotasDetalleComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
