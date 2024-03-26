import { Component } from '@angular/core';
import { Usuario, Sex, Career } from '../models/usuarios';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  
  usuarios: Usuario[] = [];
  hideAge : boolean =  false;
  hideMan : boolean = false;
  hideWoman : boolean= false;
  optionAge: boolean = false;
  optionMan: boolean = false;
  optionWoman: boolean = false;
  

  constructor() {
    this.usuarios.push(new Usuario('Jose Perez', 20123456, Sex.man, 20, Career.engineering, new Date(), 'https://avatar.iran.liara.run/public/6'));
    this.usuarios.push(new Usuario('Maria Gonzalez', 13456098, Sex.woman, 40, Career.marketing, new Date(),'https://avatar.iran.liara.run/public/72' ));
    this.usuarios.push(new Usuario('Alberto Solano', 48123456, Sex.man, 17, Career.design, new Date(), 'https://avatar.iran.liara.run/public/50'));
    this.usuarios.push(new Usuario('Silvia Pascale', 49345607, Sex.woman, 17, Career.marketing, new Date(), 'https://avatar.iran.liara.run/public/77'));
    this.usuarios.push(new Usuario('Antonio Flores', 30823456, Sex.man, 35, Career.law, new Date(),'https://avatar.iran.liara.run/public/19'));
    this.usuarios.push(new Usuario('Constanza García', 50987345, Sex.woman, 17, Career.engineering, new Date(),'https://avatar.iran.liara.run/public/91'));
    this.usuarios.push(new Usuario('Natalia Fernandez', 123456789, Sex.woman, 18, Career.law, new Date(),'https://avatar.iran.liara.run/public/85'));
    this.usuarios.push(new Usuario('Vicente Fernandez', 98345678, Sex.man, 17, Career.law, new Date(),'https://avatar.iran.liara.run/public/2'));
    this.usuarios.push(new Usuario('Florencia DiBilio', 65432789, Sex.woman, 21, Career.engineering, new Date(),'https://avatar.iran.liara.run/public/63'));
    this.usuarios.push(new Usuario('Julieta Campos', 40567982, Sex.woman, 28, Career.design, new Date(),'https://avatar.iran.liara.run/public/59'));
    this.usuarios.push(new Usuario('Luna Fernandez', 48999009, Sex.woman, 22, Career.marketing, new Date(),'https://avatar.iran.liara.run/public/88'));
    this.usuarios.push(new Usuario('Mariana Gomez', 35789654, Sex.woman, 40, Career.administration, new Date(),'https://avatar.iran.liara.run/public/70'));
    this.usuarios.push(new Usuario('Luis Mata', 22368903, Sex.man, 33, Career.design, new Date(),'https://avatar.iran.liara.run/public/10'));
    this.usuarios.push(new Usuario('Franco Escalante', 76543213, Sex.man, 28, Career.engineering, new Date(),'https://avatar.iran.liara.run/public/25'));
    this.usuarios.push(new Usuario('Facundo Castro', 51259443, Sex.man, 18, Career.law, new Date(),'https://avatar.iran.liara.run/public/45'));
  }

    filterAge(){

        this.hideAge = !this.hideAge;
        this.hideMan = false;
        this.hideWoman = false;
        this.optionAge = !this.optionAge;
        this.optionMan =  false;
        this.optionWoman = false;
    }
    filterWoman(){

        this.hideMan = !this.hideMan;
        this.hideAge = false;
        this.hideWoman = false;
        this.optionAge = false;
        this.optionMan = false;
        this.optionWoman = !this.optionWoman;
    }

    filterMan(){
        
        this.hideWoman = !this.hideWoman;
        this.hideAge = false;
        this.hideMan = false;
        this.optionAge = false;
        this.optionMan = !this.optionMan;
        this.optionWoman = false;
    }
    

}





