import './App.css'
import ClassSaludo from './components/Saludo/Saludo'

function App() {
  return (
    <div className="App">
      <ClassSaludo name="Ricardo" lastName="Kelebra"/>
      <ClassSaludo name="Eduardo" lastName="Melgoza" />
    </div>
  );
}

export default App
