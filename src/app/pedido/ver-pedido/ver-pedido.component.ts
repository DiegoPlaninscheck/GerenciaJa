import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.css']
})
export class VerPedidoComponent implements OnInit {

  id;
  situacao;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.id = route.snapshot.paramMap.get('id');
    this.situacao = route.snapshot.paramMap.get('situacao')
  }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['/pedidos'])
  }

}
