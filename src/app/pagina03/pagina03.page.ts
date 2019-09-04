import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagina03',
  templateUrl: './pagina03.page.html',
  styleUrls: ['./pagina03.page.scss'],
})
export class Pagina03Page implements OnInit {

  public notes = [];

  public livros = ['napoleon', 'rocha', 'spanghero'];

  public cores = ['amarelo', 'vermelho', 'preto'];

  public supercores = [
      {nome: 'amarelo', numero: 10}, 
      {nome: 'vermelho', numero: 34}, 
      {nome: 'preto', numero: 98}];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async addNote(){

    const prompt = await this.alertCtrl.create({
        header: 'Adicionar',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Add',
                handler: data => {
                    this.notes.push(data);
                }
            }
        ]
    });

  await prompt.present();
}

async editNote(note){

    const prompt = await this.alertCtrl.create({
        header: 'Editar',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Save',
                handler: data => {
                    let index = this.notes.indexOf(note);

                    if(index > -1){
                      this.notes[index] = data;
                    }
                }
            }
        ]
    });

    await prompt.present();       

}

async deleteNote(note){

    let index = this.notes.indexOf(note);

    if(index > -1){
        this.notes.splice(index, 1);
    }
}

    public adicionarLivros(): void {
        
    }

}
