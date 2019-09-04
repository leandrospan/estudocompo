import { Component, OnInit } from '@angular/core';

import { ArmazenamentoService } from '../services/armazenamento.service';

@Component({
  selector: 'app-pagina04',
  templateUrl: './pagina04.page.html',
  styleUrls: ['./pagina04.page.scss'],
})
export class Pagina04Page implements OnInit {

  public usu: string;
  public u: string;
  public sen: string;
  public s: string;
  public teste: string;
  public teste2: Array<string>;

  constructor(public armazena: ArmazenamentoService) { }

  public cadastraUsuario(): void{
    this.armazena.setUsuarios(this.u);
    this.armazena.setSenhas(this.s);
  }

  public verificaLogin(): void{
    //this.teste = this.armazena.getUsuarios().filter(x => x == this.u).toString();
    //if ( this.usu === this.armazena.getUsuarios().toLocaleString() ) {
    //this.teste = this.armazena.getUsuarios().indexOf(this.u).toLocaleString().toString();
    //}else{
    this.teste2 = this.armazena.getUsuarios();
    this.teste = this.teste2[this.u];
    //}
  }

  ngOnInit() {
  }

}
