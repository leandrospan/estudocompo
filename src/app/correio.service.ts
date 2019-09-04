import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreioService {

  public pegaDados(): any{
    // return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=3461550&APPID=1f8005ca51d40974070aeaad77024944');
    return this.http.get("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='03-01-2019'&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao");
  }

  constructor(private http: HttpClient) { }
}
