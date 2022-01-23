import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-produtos',
  templateUrl: './gerenciar-produtos.component.html',
  styleUrls: ['./gerenciar-produtos.component.css']
})
export class GerenciarProdutosComponent implements OnInit {

  id = undefined;
  nome = '';
  valor = undefined;

    listaProdutos = [
      {id: 1, nome: 'Arroz', valor: 5.00},
      {id: 2, nome: 'Feijão', valor: 4.50},
      {id: 3, nome: 'Macarrão', valor: 6.00}
    ]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastrarProduto(){
    let produto = {
      id: this.id,
      nome: this.nome,
      valor: this.valor
    }
    this.listaProdutos.push(produto);

    this.id = '';
    this.nome = '';
    this.valor = '';
  }

  editar(produto, indexproduto){
    this.id = produto.id;
    this.nome = produto.nome;
    this.valor = produto.valor;

    this.listaProdutos.splice(indexproduto, 1);
  }

  voltar(){
    this.router.navigate(['/main-page'])
  }

}
