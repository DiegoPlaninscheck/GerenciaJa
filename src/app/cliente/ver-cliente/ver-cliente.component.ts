import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {

  id;
  nome;
  sobrenome;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /* this.id = route.snapshot.paramMap.get('id'); */

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['/cliente'])
  }

}
