import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setNovaCategoria] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria ] = useState('Valor Inicial');

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
console.log('Voce tentou enviar o form né?')
      }}>
       
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
              setNomeDaCategoria(infosDoEvento.target.value);

            }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={categoria}>
              {categoria}
            </li>
          )
          })}
        </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;