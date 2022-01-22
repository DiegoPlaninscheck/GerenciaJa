import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-cliente',
  templateUrl: './gerenciar-cliente.component.html',
  styleUrls: ['./gerenciar-cliente.component.css']
})
export class GerenciarClienteComponent implements OnInit {

  nome = '';
  sobrenome = '';

  listaClientes = [
    {nome: 'Diego', sobrenome: 'Planinscheck'},
    {nome: 'Joao', sobrenome: 'Meireles'},
    {nome: 'Camilly', sobrenome: 'Pessoti'}
  ];

  constructor() { }

  ngOnInit() {
  }

  cadastrarPessoa(){
    let pessoa = {
      nome: this.nome,
      sobrenome: this.sobrenome
    };
    this.listaClientes.push(pessoa);

  this.nome = "";
  this.sobrenome = "";
  }

}
