import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  idProduto;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
  }

  cliente() {
    this.router.navigate(['../cliente/'])
  }

  pedidos() {
    this.router.navigate(['../pedidos/'])
  }

  produtos(){
    this.router.navigate(['../produtos/'])
  }

  voltar(){
    this.router.navigate([''])  
  }

}
