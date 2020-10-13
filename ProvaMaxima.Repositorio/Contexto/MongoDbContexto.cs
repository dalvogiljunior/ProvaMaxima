using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ProvaMaxima.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using MongoDB.Bson.Serialization.Conventions;

namespace ProvaMaxima.Repositorio.Contexto
{
    public sealed class MongoDbContexto
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoClient _clientMongo;
        private readonly MongoDbConfiguracao _mongoDbConfiguracao;

        public MongoDbContexto(IOptions<MongoDbConfiguracao> mongoDbConfiguracao)
        {
            _mongoDbConfiguracao = mongoDbConfiguracao.Value;
            _clientMongo = new MongoClient(mongoDbConfiguracao.Value.ConnectionString);


            if (_clientMongo != null)
            {
                _database = _clientMongo.GetDatabase(mongoDbConfiguracao.Value.DatabaseName);

                SeedMongo();
            }
        }
        public IMongoCollection<T> ObtenhaColecao<T>() where T: class
        {
            return _database.GetCollection<T>(typeof(T).Name);
        }

        private void SeedMongo()
        {
            if (_clientMongo.ListDatabaseNames().ToList().Any(nome => nome == _mongoDbConfiguracao.DatabaseName))
            {
                return;
            }

            ObtenhaColecao<Usuario>().InsertOne(new Usuario()
            {
                Login = "talentosmaxima",
                Senha = "talentosmaxima"
            });
        }
}
}
