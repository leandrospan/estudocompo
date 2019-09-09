import { Injectable } from '@angular/core';

import { SQLiteObject } from '@ionic-native/sqlite';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { buildDriverProvider } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class BancodedadosService {

  constructor(private sqlite: SQLite) { }

  //Cria um banco caso não exista um
  public getBD() {
    return this.sqlite.create({
      name: 'produtos.db',
      location: 'default'
    });
  }

  //Cria a estrutura inicial do banco
  public criaBancoDeDados() {
    return this.getBD()
    .then((bd: SQLiteObject) => {
      //Cria Tabelas
      this.criaTabelas(bd);
      //Insere dados padrão
      this.insereItemPadrao(bd);
    })
    .catch(e => console.log(e));
  }

  //Cria tabelas 
  private criaTabelas(bd: SQLiteObject){
    //criando tabelas
    bd.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS categorias (codigo integer primary key AUTOINCREMENT NOT NULL, nome TEXT)'],
      ['CREATE TABLE IF NOT EXISTS produtos (codigo integer primary key AUTOINCREMENT NOT NULL, nome TEXT, preco REAL, vencimento DATE, ativo integer, codigo_categoria integer, FOREIGN KEY(codigo_categoria) REFERENCES categorias(codigo))']
    ])
    .then(() => console.log('Tabelas criadas'))
    .catch(e => console.error('Erro ao criar as tabelas', e));
  }

  //incluindo padrões
  private insereItemPadrao(bd: SQLiteObject) {
    bd.executeSql('select COUNT(codigo) as qtd from categorias')
    .then((data: any) => {
      //Se não existir nenhum registro
      if (data.row.item(0).qtd == 0) {
        //criando tabelas
        bd.sqlBatch([
          ['insert into categorias (nome) values (?)', ['Hambúrgueres']],
          ['insert into categorias (nome) values (?)', ['Bebidas']],
          ['insert into categorias (nome) values (?)', ['Sobremesas']]
        ])
        .then(() => console.log('Dados padrões incluídos!'))
        .catch(e => console.error('Erro ao incluir dados padrões, e'));
      }
    })
    .catch(e => console.error('Erro ao consultar a quantidade de categorias', e));
  }
}
