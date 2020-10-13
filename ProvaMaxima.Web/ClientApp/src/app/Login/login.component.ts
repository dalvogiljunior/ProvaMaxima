import { Component, OnInit } from '@angular/core';
import { Usuario } from '../_modelos/Usuario';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit {
  public usuario: Usuario;
  public returnUrl: string;

  constructor(private router: Router, private activetedRouter: ActivatedRoute) {
  }
    ngOnInit(): void {
      this.usuario = new Usuario();
      this.returnUrl = this.activetedRouter.snapshot.queryParams['returnUrl'];
    }

  entrar() {
    if (this.usuario.login == "gil" && this.usuario.senha == "gil") {
      sessionStorage.setItem("autenticado", '1');
      this.router.navigate([this.returnUrl])
    }
  }
}
