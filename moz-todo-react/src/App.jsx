import './App.css';
import Cabecera from './Cabecera';
import ConciertoCard from './ConciertoCard';

function App() {
  // Objeto JavaScript con datos ficticios del concierto
  const conciertoDestacado = {
    artista: 'Los Rayos del Sur',
    genero: 'Indie Rock',
    horario: '22:30 - Escenario Principal',
  };

  return (
      <div className="app-container">
        <Cabecera />
        <main>
          <ConciertoCard concierto={conciertoDestacado} />
        </main>
      </div>
  );
}

export default App;
