import { Injectable } from '@angular/core';

import { SQLiteObject } from '@ionic-native/sqlite';
import { BancodedadosService } from '../services/bancodedados.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private bdService: BancodedadosService) { }
 
  /*
  public inserir(produto: Produto) {
    return this.bdService.getBD()
      .then((bd: SQLiteObject) => {
        let sql = 'insert into produtos (nome, preci, vencimento, ativo, codigo_categoria) values (?, ?, ?, ?, ?)';
        let data = [produto.nome, produto.preco, produto.vencimento, produto.ativo ? 1 : 0, produto.codigo_categoria];
 
        return bd.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public atualizar(produto: Produto) {
    return this.bdService.getBD()
      .then((bd: SQLiteObject) => {
        let sql = 'update produtos set nome = ?, preco = ?, vencimento = ?, ativo = ?, codigo_categoria = ? where codigo = ?';
        let data = [produto.nome, produto.preco, produto.vencimento, produto.ativo ? 1 : 0, produto.codigo_categoria, produto.codigo];
 
        return bd.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public remove(codigo: number) {
    return this.bdService.getBD()
      .then((bd: SQLiteObject) => {
        let sql = 'delete from produtos where codigo = ?';
        let data = [codigo];
 
        return bd.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public get(codigo: number) {
    return this.bdService.getBD()
      .then((bd: SQLiteObject) => {
        let sql = 'select * from produtos where codigo = ?';
        let data = [codigo];
 
        return bd.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let produto = new Produto();
              produto.codigo = item.codigo;
              produto.nome = item.nome;
              produto.preco = item.price;
              produto.vencimento = item.vencimento;
              produto.ativo = item.ativo;
              produto.codigo_categoria = item.codigo_categoria;
 
              return produto;
            }
 
            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public getAll(ativo: boolean, nome: string = null) {
    return this.bdService.getBD()
      .then((bd: SQLiteObject) => {
        let sql = 'SELECT p.*, c.nome as nome_categoria FROM produtos p inner join categorias c on p.codigo_categoria = c.codigo where p.ativo = ?';
        var data: any[] = [ativo ? 1 : 0];
 
        // filtrando pelo nome
        if (nome) {
          sql += ' and p.nome like ?'
          data.push('%' + nome + '%');
        }
 
        return bd.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let produtos: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var produto = data.rows.item(i);
                produtos.push(produto);
              }
              return produtos;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
  */
}
 
export class Produto {
  codigo: number;
  nome: string;
  preco: number;
  vencimento: Date;
  ativo: boolean;
  codigo_categoria: number;
}