import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  user = '';
  password = '';

  listUsers = [
    {user: 'Diego', password: '123'},
    {user: 'João', password: '123'},
    {user: 'Camilly', password: '123'}
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar(){
    if((this.user == 'Diego' && this.password == '123') || (this.user == 'João' && this.password == '123') || (this.user == 'Camilly' && this.password == '123')){
      localStorage.setItem("USER", this.user);
      localStorage.setItem("password", this.password)
      this.router.navigate(['../main-page/'])
    }else{
      this.router.navigate([''])
    }
  }
  
  logout(){
    localStorage.removeItem('USER');
    localStorage.removeItem('password')
  }

}
