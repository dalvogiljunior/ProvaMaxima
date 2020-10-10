using System;
using System.Collections.Generic;
using System.Text;

namespace ProvaMaxima.Dominio.Entidades
{
    public class Usuario
    {
        public Guid Id { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
    }
}
