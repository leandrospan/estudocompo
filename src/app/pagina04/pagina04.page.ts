import { Component, OnInit, ViewChild } from '@angular/core';

import { ArmazenamentoService, Item } from '../services/armazenamento.service';
import { IonList, Platform, ToastController } from '@ionic/angular';


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

  items: Item[] = [];
  novoItem: Item = <Item>{};

  // @ViewChild('myList')myList: List;
  @ViewChild('mylist', {static: false})mylist: IonList;

  constructor(
    public armazena: ArmazenamentoService,
    private plt: Platform, 
    private toastController: ToastController
    ) { 
      this.plt.ready().then(() => {
        this.carregarItems();
      });
    }

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

  
  // CREATE
  adicionarItem() {
    this.novoItem.modificado = Date.now();
    this.novoItem.codigo = Date.now();
 
    this.armazena.adicionarItem(this.novoItem).then(item => {
      this.novoItem = <Item>{};
      this.showToast('Item adicionado!')
      this.carregarItems(); // Or add it to the array directly
    });
  }
 
  // READ
  carregarItems() {
    this.armazena.getItem().then(items => {
      this.items = items;
    });
  }
 
  // UPDATE
  atualizarItem(item: Item) {
    item.titulo = `ATUALIZADO: ${item.titulo}`;
    item.modificado = Date.now();
 
    this.armazena.atualizarItem(item).then(item => {
      this.showToast('Item Atualizado!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.carregarItems(); // Or update it inside the array directly
    });
  }
 
  // DELETE
  deletarItem(item: Item) {
    this.armazena.deletarItem(item.codigo).then(item => {
      this.showToast('Item removido!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.carregarItems(); // Or splice it from the array directly
    });
  }
 
  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
 

  ngOnInit() {
  }

}
