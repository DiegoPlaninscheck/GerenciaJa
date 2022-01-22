import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-pedido',
  templateUrl: './gerenciar-pedido.component.html',
  styleUrls: ['./gerenciar-pedido.component.css']
})
export class GerenciarPedidoComponent implements OnInit {

  id = undefined;

  listaPedidos = [
    {id: 1},
    {id: 2},
    {id: 3}
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastrarPedido(){
    let pedido = {
      id: this.id
    }
    this.listaPedidos.push(pedido);

    this.id = '';
  }

  voltar(){
    this.router.navigate(['/main-page'])
  }

}
