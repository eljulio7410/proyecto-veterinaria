import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../services/personajes.service';
import { Personaje } from '../models/personaje.model';
import { ComunicacionService } from '../services/comunicacion.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  personajes:Personaje[] = [];

  constructor(
    private personajesService: PersonajesService,
    private comunicacionService: ComunicacionService
    ) { }

  ngOnInit(): void {
    this.actualizarListaPersonajes();

    // Suscribirse a cambios en el servicio de comunicación
    this.comunicacionService.obtenerActualizacionLista()
      .subscribe(() => {
        this.actualizarListaPersonajes();
      });
  }

  
  eliminarPersonaje(id:number){
    this.personajesService.deletePersonaje(id)
    .subscribe(
      () => {
        console.log(`Personaje con ID ${id} eliminado con éxito.`);
        this.actualizarListaPersonajes();
      },
      (error) => {
        console.error(`Error al eliminar personaje con ID ${id}`, error);
      }
    )
  }


  private actualizarListaPersonajes(): void {
    this.personajesService.getPersonajes()
      .subscribe(
        (data) => {
          this.personajes = data;
        },
        (error) => {
          console.error('Error al obtener la lista de personajes después de la actualización', error);
        }
      );
  }

}
