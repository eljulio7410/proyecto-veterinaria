import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonajesService } from '../services/personajes.service';
import { Personaje } from '../models/personaje.model';
import { ComunicacionService } from '../services/comunicacion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {


  
  nuevoPersonaje: Personaje = { id: 0, name: '', power: 0 };


  constructor(
    private personajesService: PersonajesService,
    private comunicacionService: ComunicacionService
    ) { }

  ngOnInit(): void {
  }

  clear(){
    this.nuevoPersonaje = { id: 0, name: '', power: 0 };

  }
    agregarPersonaje() {
      this.personajesService.createPersonaje(this.nuevoPersonaje)
        .subscribe(
          (nuevoPersonajeCreado) => {
            this.nuevoPersonaje.id = nuevoPersonajeCreado.id;
            this.comunicacionService.notificarActualizacionLista();
            this.clear();
           
      
          },
          (error) => {
            console.error('Error al crear un nuevo personaje', error);
          }
        );
    }



 
  }
