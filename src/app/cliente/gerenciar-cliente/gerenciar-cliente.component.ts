import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-cliente',
  templateUrl: './gerenciar-cliente.component.html',
  styleUrls: ['./gerenciar-cliente.component.css']
})
export class GerenciarClienteComponent implements OnInit {

  id = undefined;
  nome = '';
  sobrenome = '';

  listaClientes = [
    {id: 1, nome: 'Diego', sobrenome: 'Planinscheck'},
    {id: 2, nome: 'João', sobrenome: 'Meireles'},
    {id: 3, nome: 'Camilly', sobrenome: 'Pessoti'}
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastrarPessoa(){
    let pessoa = {
      id: this.id,
      nome: this.nome,
      sobrenome: this.sobrenome
    };
    this.listaClientes.push(pessoa);

  this.id = "";
  this.nome = "";
  this.sobrenome = "";
  }

  abrirProduto(cliente){
    this.router.navigate(['/cliente/ver-cliente/', cliente])
  }

  editar(personData, indexPerson){
    this.id = personData.id;
    this.nome = personData.nome;
    this.sobrenome = personData.sobrenome;

    this.listaClientes.splice(indexPerson, 1);
  }

  deletar(indexPerson){
    this.listaClientes[indexPerson].deleted = true;
  }

  voltar(){
    this.router.navigate(['/main-page'])
  }
}
