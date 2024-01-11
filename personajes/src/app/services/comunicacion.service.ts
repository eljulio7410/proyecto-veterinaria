import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private actualizarListaSubject = new Subject<void>();

  notificarActualizacionLista(): void {
    this.actualizarListaSubject.next();
  }

  obtenerActualizacionLista(): Subject<void> {
    return this.actualizarListaSubject;
  }

  constructor() { }
}
