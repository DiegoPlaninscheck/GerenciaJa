import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  user = '';
  password = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar(){
    localStorage.setItem("USER", this.user);
    localStorage.setItem("password", this.password)
    this.router.navigate(['/main'])
  }

  logout(){
    localStorage.removeItem('user');
  }

}
