import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item{
  codigo: number,
  titulo: string,
  valor: string,
  modificado: number 
}

const ITEMS_KEY = 'meus-Items';

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

  constructor(private storage: Storage) { }

  public adicionarItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  public getItem(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }

  public atualizarItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let novoItems: Item[] = [];
      
      for (let i of items) {
        if (i.codigo === item.codigo) {
          novoItems.push(item);
        } else {
          novoItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, novoItems);
    });
  }

  public deletarItem(cod: number): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let paraDeixar: Item[] = [];
      
      for (let i of items) {
        if (i.codigo === cod) {
          paraDeixar.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, paraDeixar);
    });
  }
}
