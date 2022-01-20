import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-cliente',
  templateUrl: './gerenciar-cliente.component.html',
  styleUrls: ['./gerenciar-cliente.component.css']
})
export class GerenciarClienteComponent implements OnInit {



  listaClientes = [
    {name: 'Diego', sobrenome: 'Planinscheck'},
    {name: 'Joao', sobrenome: 'Meireles'},
    {name: 'Camilly', sobrenome: 'Pessoti'}
  ];
  

  constructor() { }

  ngOnInit() {
  }
  

}
