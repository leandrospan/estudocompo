import { Component, OnInit } from '@angular/core';

import { NavController, ToastController } from '@ionic/angular';
import { ProdutosService, Produto } from '../services/produtos.service';

@Component({
  selector: 'app-pagina05',
  templateUrl: './pagina05.page.html',
  styleUrls: ['./pagina05.page.scss'],
})
export class Pagina05Page implements OnInit {

  produtos: any[] = [];
  somenteInativos: boolean = false;
  procuraTexto: string = null;
 
  constructor(
    public navCtrl: NavController, 
    private toast: ToastController, 
    private produtoService: ProdutosService) { }
 
  ionViewDidEnter() {
    this.getAllProdutos();
  }
 
  getAllProdutos() {
    this.produtoService.getAll(!this.somenteInativos, this.procuraTexto)
      .then((resultado: any[]) => {
        this.produtos = resultado;
      });
  }
 
  adicionarProduto() {
    this.navCtrl.navigateForward('EditarProdutoPage');
  }
 
  editarProduto(id: number) {
    this.navCtrl.navigateForward('EditarProdutoPage');
  }
 
  removeProduto(produto: Produto) {
    this.produtoService.remove(produto.codigo)
      .then(async () => {
        // Removendo do array de produtos
        var index = this.produtos.indexOf(produto);
        this.produtos.splice(index, 1);
        (await this.toast.create({ message: 'Produto removido.', duration: 3000, position: 'bottom' })).present();
      })
  }
 
  filtrarProdutos(ev: any) {
    this.getAllProdutos();
  }
 

  ngOnInit() {
  }

}
