// En models/personaje.model.ts

export class Personaje {
    id: number;
    name: string;
    power: number;
  
    constructor(id: number, nombre: string, edad: number) {
      this.id = id;
      this.name = nombre;
      this.power = edad;
    }
  }
  