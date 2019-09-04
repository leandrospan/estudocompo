import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoService {

  public usuarios: Array<string> = [];

  public setUsuarios(u: string) : void {
    this.usuarios.push(u);
  }

  public getUsuarios(): Array<string> {
    return this.usuarios;
  }

  public senhas: Array<string> = [];

  public setSenhas(s: string) : void {
    this.senhas.push(s);
  }

  public getSenhas(): Array<string> {
    return this.senhas;
  }

  constructor() { }
}
