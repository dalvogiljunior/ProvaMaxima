using MongoDB.Bson.Serialization;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProvaMaxima.Dominio.Entidades
{
public class ItemPedido: Entidade
    {
        public Produto Produto { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            if (Produto == null)
                AdicionarMensagemDeValidacao("Não foi possível identifiar o Produto.");

            if (Quantidade <= 0)
                AdicionarMensagemDeValidacao("A quantidade deve ser maior que 0.");
        }
    }
}
