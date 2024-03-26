import { Data } from "@angular/router";

export enum Sex{

    man = "masculino",
    woman = "femenino"
}

export enum Career{

    engineering = "Ingeniería",
    marketing= "Marketing",
    administration = "Administración",
    design = "Diseño Gráfico",
    law = "Derecho"
}

export interface IUsuario{

    name : string;
    DNI : number;
    sex : string;
    age : number;
    career: string;
    date: Date;
    img : string;
}

export class Usuario implements IUsuario{

    constructor(
        public name: string,
        public DNI: number,
        public sex: Sex,
        public age: number,
        public career: string,
        public date: Date,
        public img:string,
    ){} 
}

