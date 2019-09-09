import { Component, OnInit } from '@angular/core';

import { NavController, NavParams, ToastController } from '@ionic/angular';
import { ProdutosService, Produto } from '../services/produtos.service';
import { CategoriaService} from '../services/categoria.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
})
export class EditarProdutoPage implements OnInit {
  modelo: Produto;
  categorias: any[];
 
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private produtosService: ProdutosService,
    private categoriaService: CategoriaService) {
 
    this.modelo = new Produto();
 
    if (this.navParams.data.id) {
      this.produtosService.get(this.navParams.data.id)
        .then((resultado: any) => {
          this.modelo = resultado;
        })
    }
  }
 
  /**
   * Roda quando a página é carregada
   */
  ionViewDidLoad() {
    this.categoriaService.getAll()
      .then((resultado: any[]) => {
        this.categorias = resultado;
      })
      .catch(async () => {
        (await this.toast.create({ message: 'Erro ao carregar as categorias.', duration: 3000, position: 'bottom' })).present();
      });
  }
 
  salvar() {
    this.salvarProduto()
      .then(async () => {
        (await this.toast.create({ message: 'Produto salvo.', duration: 3000, position: 'bottom' })).present();
        this.navCtrl.pop();
      })
      .catch(async () => {
        (await this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000, position: 'bottom' })).present();
      });
  }
 
  private salvarProduto() {
    if (this.modelo.codigo) {
      return this.produtosService.atualizar(this.modelo);
    } else {
      return this.produtosService.inserir(this.modelo);
    }
  }

  ngOnInit() {
  }

}
