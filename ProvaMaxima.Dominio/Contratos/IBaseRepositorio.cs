using System;
using System.Collections.Generic;
using System.Text;

namespace ProvaMaxima.Dominio.Contratos
{
    public interface IBaseRepositorio<T>: IDisposable where T:class
    {
        void Adicionar(T obj);
        T ObtenhaPorId(Guid id);
        IEnumerable<T> ObtenhaTodos();
        void Atualizar(T obj);
        void Remover(T obj);
    }
}
