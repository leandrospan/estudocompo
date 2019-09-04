import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina02',
  templateUrl: './pagina02.page.html',
  styleUrls: ['./pagina02.page.scss'],
})
export class Pagina02Page implements OnInit {

  public testeArray001 = [];
  public herois = ['Cyclops', 'Jean Grey', 'Conan', 'Wolverine'];

  public heroes = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];

  public groceries = [
    'Bread',
    'Milk',
    'Cheese',
    'Snacks',
    'Apples',
    'Bananas',
    'Peanut Butter',
    'Chocolate',
    'Avocada',
    'Vegemite',
    'Muffins',
    'Paper towels'
  ];

  constructor() { }

  ngOnInit() {
  }

}
