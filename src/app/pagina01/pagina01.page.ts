import { Component, OnInit } from '@angular/core';

import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CorreioService } from '../correio.service';

@Component({
  selector: 'app-pagina01',
  templateUrl: './pagina01.page.html',
  styleUrls: ['./pagina01.page.scss'],
})
export class Pagina01Page implements OnInit {
  
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
 
  ngOnInit() {
  }

}
