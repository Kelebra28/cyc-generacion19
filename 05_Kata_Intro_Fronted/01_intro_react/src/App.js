import './App.css'
import ClassSaludo from './components/Saludo/Saludo'
import Couter from './components/Counter/Couter'
import TextChange from './components/TextChange/TextChange'

function App() {
  return (
    <div className="App">
      <ClassSaludo name="Ricardo" lastName="Kelebra"/>
      <Couter init="0" user="Ricardo"/>
      <TextChange/>
    </div>
  );
}

export default App
