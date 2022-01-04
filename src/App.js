import './App.css';
import Media from './components/Media';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux (Simples)</h1>
      <div className='linha'>
      <Intervalo>X</Intervalo>
      </div>
      <div className='linha'>
      <Media  ></Media>
      <Soma  ></Soma>
      <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
