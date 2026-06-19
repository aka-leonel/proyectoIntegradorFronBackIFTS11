import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotasService } from '../../services/notas.service';
import { Nota } from '../../models/nota';

@Component({
    selector: 'app-notas-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './notas-list.component.html',
    styleUrl: './notas-list.component.css'
})
export class NotasListComponent implements OnInit {
    notas: Nota[] = [];
    filtro: string = '';

    constructor(private notasService: NotasService, private router: Router) { }

    ngOnInit(): void {
        this.notasService.getNotas().subscribe({
            next: (data) => this.notas = data,
            error: (err) => console.error(err)
        });
    }


    verDetalle(id: string) { this.router.navigate(['/notas', id]); }
    nuevaNota() { this.router.navigate(['/notas/nueva']); }
}
