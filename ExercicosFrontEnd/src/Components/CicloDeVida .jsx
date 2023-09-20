import { Component } from 'react';

class CicloDeVida extends Component {
  componentDidMount() {
    console.log('Componente montado');
  }

  componentDidUpdate() {
    console.log('Componente atualizado');
  }

  componentWillUnmount() {
    console.log('Componente desmontado');
  }

  render() {
    return <div>Componente com ciclo de vida</div>;
  }
}

export default CicloDeVida;
