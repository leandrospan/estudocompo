import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BancodedadosService } from '../app/services/bancodedados.service';
import { HomePage } from '../app/home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = null;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private bdService: BancodedadosService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //Criando o banco de dados
      this.bdService.criaBancoDeDados()
        .then(() => {
          // fechando a SplashScreen somente quando o banco for criado
          this.openHomePage(this.splashScreen);
            })
            .catch(() => {
              // ou se houver erro na criação do banco
              this.openHomePage(this.splashScreen);
            });
    });
  }

  private openHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = HomePage;
  }
}
