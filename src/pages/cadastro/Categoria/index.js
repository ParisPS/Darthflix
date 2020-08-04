import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias' 
    : 'https://darthflix.herokuapp.com/categorias'
    fetch(URL_TOP)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
  });

    // setTimeout(() => {
    //setCategorias([
    //    ...categorias,
    //    {
    //      id: 1,
    //      nome: "Front End",
    //      descricao: "uma Categoria show",
    //      cor: "##6BD1FF"
    //    },
    //    {
    //     id: 2,
    //     nome: "Back End",
    //     descricao: "uma Categoria show",
    //     cor: "#00C86F"
    //    },
    // {
    //     id: 3,
    //     nome: "Star Wars",
    //     descricao: "uma Categoria show",
    //     cor: "#257BE5"
    //    },
    // {
    //     id: 4,
    //     nome: "Filmes",
    //     descricao: "uma Categoria show",
    //     cor: "red"
    //    },
    // {
    //     id: 5,
    //     nome: "Games",
    //     descricao: "uma Categoria show",
    //     cor: "orange"
    //    },
    //  ]);
    //}, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;