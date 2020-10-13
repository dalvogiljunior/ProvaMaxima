import { Component } from '@angular/core';
import { Usuario } from '../_models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent {
  public usuario;

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    alert(this.usuario.login + "-" + this.usuario.senha);
  }
}
