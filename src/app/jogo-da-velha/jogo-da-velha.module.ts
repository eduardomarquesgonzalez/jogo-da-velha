import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { JogoDaVelhaService } from './service/jogo-da-velha.service';



@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  //utilizado porque não esta utilizando rota
  exports: [
    JogoDaVelhaComponent
  ],
  providers:[
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
