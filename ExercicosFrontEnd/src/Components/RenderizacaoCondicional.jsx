import  { useState } from 'react';

function RenderizacaoCondicional() {
  const [estaLogado, setEstaLogado] = useState(false);

  return (
    <div>
      {estaLogado ? <p>Usuário logado</p> : <p>Usuário não logado</p>}
      <button onClick={() => setEstaLogado(!estaLogado)}>
        Alternar Login
      </button>
    </div>
  );
}

export default RenderizacaoCondicional;
