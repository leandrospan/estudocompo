import { Component } from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuario: string;
  public senha: string;

  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  public verificaUsuario(): void {
    if ((this.usuario === 'leandrospan') && (this.senha === '123mudar')) {
      this.loginCorreto();
    } else {
      this.loginErrado();
    }
  }

  async loginErrado() {
    const alert = await this.alertController.create({
      header: 'LOGIN',
      subHeader: 'Pedido Negado',
      message: 'Nome do Usuário ou Senha Incorretos!!!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async loginCorreto() {
    const alert = await this.alertController.create({
      header: 'LOGIN',
      subHeader: 'Pedido Liberado',
      message: 'Saudações' + this.usuario + '!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          } 
        }, {
          text: 'Ok',
          handler: () => {
            this.navCtrl.navigateForward('pagina01');
          }
        }
      ]
    });

    await alert.present();
  }
 
}
