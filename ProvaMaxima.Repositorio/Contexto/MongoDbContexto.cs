using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ProvaMaxima.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProvaMaxima.Repositorio.Contexto
{
    public sealed class MongoDbContexto
    {
        private readonly IMongoDatabase _database = null;

        public MongoDbContexto(IOptions<MongoDbConfiguracao> mongoDbConfiguracao)
        {
            var client = new MongoClient(mongoDbConfiguracao.Value.ConnectionString);

            if (client != null)
                _database = client.GetDatabase(mongoDbConfiguracao.Value.DatabaseName);
        }
        public IMongoCollection<T> ObtenhaColecao<T>() where T: class
        {
            return _database.GetCollection<T>(typeof(T).Name);
        }
}
}
