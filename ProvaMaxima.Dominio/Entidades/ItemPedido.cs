using System;
using System.Collections.Generic;
using System.Text;

namespace ProvaMaxima.Dominio.Entidades
{
public class ItemPedido: Entidade
    {
        public Guid ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            if (ProdutoId == null)
                AdicionarMensagemDeValidacao("Não foi possível identifiar o Produto.");

            if (Quantidade <= 0)
                AdicionarMensagemDeValidacao("A quantidade deve ser maior que 0.");
        }
    }
}
