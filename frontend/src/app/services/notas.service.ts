import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota.js';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private apiUrl = 'http://localhost:3000/api/notas'

  constructor(
    private http: HttpClient
  ) { }

  // getNotasService
  getNotas(): Observable<Nota[]> { return this.http.get<Nota[]>(this.apiUrl); }

  // getNotaByIdService

  // createNotaService

  // updateNotaService

  public deleteNotaService(id: number | string): Observable<Nota> {
    return this.http.delete<Nota>(`${this.apiUrl}/${id}`)
  }

}
