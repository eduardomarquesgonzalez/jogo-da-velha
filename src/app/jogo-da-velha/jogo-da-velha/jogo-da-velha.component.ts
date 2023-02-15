import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from '../service/jogo-da-velha.service';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css'],
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) {}

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }
  //retorna se a tela de inicio deve ser exibida;
  // return: boolean
  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  //retorna se o tabuleiro deve ser exibido;
  showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  // Realiza uma jogada ao clicar em um local do tabuleiro;
  // @Param number posX
  // @Param number posy
  // @Return void
  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }
  // Retorna se a peça X deve ser exibida para a coordenada informada;
  // @Param number posX
  // @Param number posy
  // @Return boolean
  exibeX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  // Retorna se a peça O deve ser exibida para a coordenada informada;
  // @Param number posX
  // @Param number posy
  // @Return boolean
  exibeO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  // Retorna se a marcação de vitoria deve ser exibida para a coordenada informada;
  // @Param number posX
  // @Param number posy
  // @Return boolean
  exibirVitorias(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  // retorna o numero do jogador a jogar.
  // return number

  get jogador(): number{
    return this.jogoDaVelhaService.jogador;
  }

  novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }

  // jogador: string = 'X';
  // jogadaTest(x: number, y: number) {
  //   console.log(this.jogador, x, y);
  //   this.jogador = this.jogador === 'X' ? 'O' : 'X';
  // }
}
