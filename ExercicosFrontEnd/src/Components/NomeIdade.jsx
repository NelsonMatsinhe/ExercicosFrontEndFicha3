
import HelloWorld from './HelloWorld';

function NomeIdade() {
    const  nome="Nelson";
     const idade=12
  return (
    <div>
      <HelloWorld />
      <p>Nome: { nome}</p>
      <p>Idade: {idade}</p>
    </div>
  );
}

export default NomeIdade;
