
export class Cliente {

    constructor(id:number, nombre:string, edad:number){

        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }

    id!: number;
    nombre!: string;
    edad!: number;
}