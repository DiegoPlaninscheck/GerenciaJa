import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-pedido',
  templateUrl: './gerenciar-pedido.component.html',
  styleUrls: ['./gerenciar-pedido.component.css']
})
export class GerenciarPedidoComponent implements OnInit {

  id = undefined;
  situacao = '';

  listaPedidos = [
    {id: 1, situacao: 'Finalizado'},
    {id: 2, situacao: 'Em andamento'},
    {id: 3, situacao: 'Em andamento'}
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastrarPedido(){
    let pedido = {
      id: this.id,
      situacao: this.situacao
    }
    this.listaPedidos.push(pedido);

    this.id = '';
    this.situacao = '';
  }

  abrirProduto(pedido){
    this.router.navigate(['/pedidos/ver-pedido/', pedido])
  }

  editar(pedido, indexPedido){
    this.id = pedido.id;
    this.situacao = pedido.situacao;

    this.listaPedidos.splice(indexPedido, 1);
  }

  /* deletar(indexPedido){
    this.listaPedidos[indexPedido].deleted = true;
  } */

  voltar(){
    this.router.navigate(['/main-page'])
  }

}
