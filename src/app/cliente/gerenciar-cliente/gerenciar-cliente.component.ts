import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

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

  voltar(){
    this.router.navigate(['/main-page'])
  }

}
