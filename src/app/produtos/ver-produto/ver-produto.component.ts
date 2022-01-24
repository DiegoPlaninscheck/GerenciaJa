import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {

  id;
  nome;
  valor;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.id = route.snapshot.paramMap.get('id');
    this.nome = route.snapshot.paramMap.get('nome');
    this.valor = route.snapshot.paramMap.get('valor');
  }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['/produtos'])
  }

}
