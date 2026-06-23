import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Nota } from '../../models/nota';
import { NotasService } from '../../services/notas.service';

@Component({
  selector: 'app-notas-detalle',
  imports: [CommonModule, DatePipe, RouterLink],
  templateUrl: './notas-detalle.component.html',
  styleUrl: './notas-detalle.component.css'
})
export class NotasDetalleComponent implements OnInit {

  nota: Nota | null = null
  notaId: string = ''

  constructor(
    private _notasService: NotasService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.notaId = this._route.snapshot.paramMap.get('id') || ''

    this._notasService.getNotaByIdService(this.notaId).subscribe({
      next: nota => this.nota = nota,
      error: error => console.log(error)
    })
  }

  borrarNota(): void {
    if (!confirm('¿Seguro que querés borrar esta nota?')) {
      return
    }

    this._notasService.deleteNotaService(this.notaId).subscribe({
      next: () => {
        console.log('Nota eliminada')
        this._router.navigate(['/notas'])
      },
      error: error => console.log(error)
    })
  }

  volver(): void {
    this._router.navigate(['/notas'])
  }
}