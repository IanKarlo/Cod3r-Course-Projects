import React from 'react';

import Main from '../../components/Main';

export default (props) => {
  return(
    <Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de React.">
      <div className="display-4">
        Bem Vindo!
      </div>
      <hr/>
      <p className="mb-0">
        Sistema para exemplificar a construção de um cadastro de usuário em React.
      </p>
    </Main>
  );
}