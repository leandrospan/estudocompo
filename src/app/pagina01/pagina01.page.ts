import { Component, OnInit } from '@angular/core';

/*
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CorreioService } from '../correio.service';
*/

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pagina01',
  templateUrl: './pagina01.page.html',
  styleUrls: ['./pagina01.page.scss'],
})
export class Pagina01Page implements OnInit {

  public dadoParaArmazenar;
  public usuario;  
  public senha: string;
  public nome: string;
  public idade: number;
  public saida;

  constructor(public armazenamento: Storage){ }

  public adicionarUsuario() {
    // this.armazenamento.set(chave , dado a ser armazenado)
    this.armazenamento.set("usu", this.usuario = {
      user: this.nome,
      pass: this.senha
    });
  }

  public mostrarUsuario(){
    this.saida = this.armazenamento.get("usu");
  }

  setValue(){
    this.armazenamento.set("ni",this.dadoParaArmazenar = {
      nome: this.nome,
      idade: this.idade
    }).then((successData)=>{
      console.log("Dado Armazenado");
      console.log(successData);
    });
  }

  getValue(){
    this.armazenamento.get("ni").then((data)=>{
      console.log(data);
    });
  }

  /*
  public set(setting, value){
    return this.armazenamento.set('setting:${ settingName }', value);
  }

  public async get(settingName){
    return await this.armazenamento.get('setting:${ settingName }');
  }

  public async remove(settingName){
    return await this.armazenamento.remove('setting:${ settingName }');
  }

  public clear() {
    this.armazenamento.clear().then(() => {
      console.log('all keys cleared');
    });
  }

  */

  /*
  setValue(){
    this.armazenamento.set("objeto",this.dadoParaArmazenar).then((successData)=>{
      console.log("Dado Armazenado");
      console.log(successData);
    })
  }

  getValue(){
    this.armazenamento.get("objeto").then((data)=>{
      console.log(data);
    })
  }
  */
  
  /*
  infiniteScroll: IonInfiniteScroll;
  virtualScroll: IonVirtualScroll;
 
  listaDeDados:any;

  public infoSite: any;
  public foi: number;
  public naofoi: string;

  public dolar: number;
  public dolares = []; 
  public infoBruta: any;
  public infoBruta2: any;
  public infoBruta3 = [];
 
  constructor( public http: HttpClient, public correio: CorreioService) {
    this.listaDeDados = [];
    
    for (let i = 0; i < 50; i++) { 
      this.listaDeDados.push("Número do item "+(this.listaDeDados.length+1));
    }
  }
 
 
 
  carregarDados(event) {
    
    setTimeout(() => {
    
      for (let i = 0; i < 50; i++) { 
        this.listaDeDados.push("Número do item "+(this.listaDeDados.length+1));
      }
      //Esconder carregador de lista infinita quando completada
      event.target.complete();
 
      //Recarregar Virtual Scroll depois de adicionar um novo dado
      this.virtualScroll.checkEnd();
 
      // Determinar se um dado está lá
      // e desabilitar se não infinite scroll
      if (this.listaDeDados.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
 
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }  

 public vai(): void {
  this.correio.pegaDados().subscribe(
    data => {
      this.infoBruta2 = (data as any);  
      this.infoBruta3 = (data as any);
      this.dolar = <number> this.infoBruta2.value[0].cotacaoCompra;
  }, error => {
      this.infoBruta2 = error;
  });
}
public pega(): any {
  return this.infoBruta = this.correio.pegaDados();
}
public pega2(): any {
  return this.dolar = this.correio.pegaDados().value.cotacaoCompra;
}
  */

  ngOnInit() {
  }

}
