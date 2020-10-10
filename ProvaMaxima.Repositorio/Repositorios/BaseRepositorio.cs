using ProvaMaxima.Dominio.Contratos;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProvaMaxima.Repositorio.Repositorios
{
    public class BaseRepositorio<T> : IBaseRepositorio<T> where T : class
    {
        public void Adicionar(T obj)
        {
            throw new NotImplementedException();
        }

        public void Atualizar(T obj)
        {
            throw new NotImplementedException();
        }

        public T ObtenhaPorId(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> ObtenhaTodos()
        {
            throw new NotImplementedException();
        }

        public void Remover(T obj)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
