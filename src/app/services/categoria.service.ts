import { Injectable } from '@angular/core';

import { SQLiteObject } from '@ionic-native/sqlite';
import { BancodedadosService } from '../services/bancodedados.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private bdService: BancodedadosService) { }
 
  /*
  public getAll() {
    return this.bdService.getBD()
    .then((bd: SQLiteObject) => {
 
      return bd.executeSql('select * from categorias', [])
        .then((data: any) => {
          if (data.rows.length > 0) {
            let categorias: any[] = [];
            for (var i = 0; i < data.rows.length; i++) {
              var categoria = data.rows.item(i);
              categorias.push(categoria);
            }
            return categorias;
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
