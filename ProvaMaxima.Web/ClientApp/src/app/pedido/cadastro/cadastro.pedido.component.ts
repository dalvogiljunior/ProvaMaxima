import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../_modelos/pedido';
import { PedidoServico } from '../../_servicos/pedido/pedido.servico';
import { map } from 'rxjs/operators';
import { ProdutoServico } from '../../_servicos/produto/produto.servico';
import { Produto } from '../../_modelos/produto';
import { Cliente } from '../../_modelos/cliente';
import { ClienteServico } from '../../_servicos/cliente/cliente.servico';
import { ItemPedido } from '../../_modelos/itemPedido';

@Component({
  selector: 'cadastro-pedido',
  templateUrl: './cadastro.pedido.component.html',
  styleUrls: ['./cadastro.pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {
  public pedido: Pedido;
  public valorItens: number;
  public valorFrete: number;
  public valorTotal: number;
  public clienteSelecionado: Cliente;
  public listaDeItensDePedido: ItemPedido[];
  public listaDeProdutos:Produto[];
  public listaDeClientes:Cliente[];
  codigoAtualCliente = '';
  codigoAtual = '';

  constructor(private pedidoServer: PedidoServico, private produtoServico: ProdutoServico, private clienteServico: ClienteServico) {

  }

  ngOnInit() {
    this.listaDeItensDePedido = [];
    this.filtroProduto();
    this.filtroCliente();
  }

  selecaoDeProduto(chave: string) {
    var produto = this.filtre<Produto[]>(this.listaDeProdutos, chave)[0];
    console.log(produto);
    if (produto != null) {
      var itemPedido = new ItemPedido();
      itemPedido.produto = produto;
      itemPedido.quantidade = 1;

      this.listaDeItensDePedido.push(itemPedido);
      console.log(this.listaDeItensDePedido);
        }
  }

  selecaoDeCliente(chave: string) {
    this.clienteSelecionado = this.filtre<Cliente[]>(this.listaDeClientes, chave)[0];
    console.log(this.clienteSelecionado);
  }

  filtroProduto() {
    this.produtoServico.obtenhaListaDeProdutos()
      .pipe<Produto[]>(map(lista => this.filtre<Produto[]>(lista, this.codigoAtual))).subscribe(resultado => {
        this.listaDeProdutos = resultado;
      });;
  }

  filtroCliente() {
    this.clienteSelecionado = null;
    this.clienteServico.obtenhaListaDeClientes()
      .pipe<Cliente[]>(map(lista => this.filtre<Cliente[]>(lista, this.codigoAtualCliente))).subscribe(resultado => {
        this.listaDeClientes = resultado;
      });
  }

  filtre<T>(valores, valorPesquisa): T {
    console.log(valores)
    return valores.filter(obj => (obj.codigo + " - " + obj.nome).toLowerCase().includes(valorPesquisa.toLowerCase()))
  }

}
