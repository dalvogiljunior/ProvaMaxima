using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ProvaMaxima.Dominio.Entidades
{
    public class Pedido: Entidade
    {
        public DateTime DataPedido { get; set; }
        public Cliente Cliente { get; set; }
        public ICollection<ItemPedido> ItensPedidos { get; set; }

        public override void Validate()
        {
            LimparMensagensDeValidacao();

            if (Cliente == null)
                AdicionarMensagemDeValidacao("O Cliente deve ser informado.");

            if (ItensPedidos == null || !ItensPedidos.Any())
                AdicionarMensagemDeValidacao("Pedido não pode ficar sem itens.");
        }
    }
}
