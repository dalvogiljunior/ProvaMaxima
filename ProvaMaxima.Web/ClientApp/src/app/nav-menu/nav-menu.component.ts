import { Component } from '@angular/core';
import { UsuarioServico } from '../_servicos/usuario/usuario.servico';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private usuarioServico: UsuarioServico) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  usuarioLogado(): boolean {
    return this.usuarioServico.usuario_autenticado();
  }

  sair() {
    this.usuarioServico.limpar_sessao();
  }
}
