import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.css']
})
export class VerPedidoComponent implements OnInit {

  id;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['/pedidos'])
  }

}
