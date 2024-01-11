import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personaje } from '../models/personaje.model';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private apiUrl= "http://localhost:8081/personajes";
  private actualizarListaSubject = new Subject<void>();
  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.apiUrl);
  }
  notificarActualizacionLista(): void {
    this.actualizarListaSubject.next();
  }

  obtenerActualizacionLista(): Observable<void> {
    return this.actualizarListaSubject.asObservable();
  }

  createPersonaje(newCharacter: Personaje): Observable<Personaje> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Puedes agregar otras cabeceras según sea necesario
      })
    };

    return this.http.post<Personaje>(this.apiUrl, newCharacter, httpOptions);
  }

  deletePersonaje(id:number):Observable<void>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);

  }

  
}
