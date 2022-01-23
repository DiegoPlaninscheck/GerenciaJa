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
    {nome: 'João', sobrenome: 'Meireles'},
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

  editar(personData, indexPerson){
    this.nome = personData.nome;
    this.sobrenome = personData.sobrenome;

    this.listaClientes.splice(indexPerson, 1);
  }

  voltar(){
    this.router.navigate(['/main-page'])
  }

  

}
