import './App.css'
// import ClassSaludo from './components/Saludo/Saludo'
import SaludoFuncional from './components/Saludo/SaludoFunctionall'
// import Couter from './components/Counter/Couter'
import FuncionalCouter from './components/Counter/FuncionalCouter'
import TextChange from './components/TextChange/TextChange'
import ButtonSW from './components/GetSW/ButtonSW'

function App() {
  return (
    <div className="App">
      {/* <ClassSaludo name="Ricardo" lastName="Kelebra"/> */}
      {/* <SaludoFuncional name="Ricardo" lastName="Funcional" /> */}
      {/* <Couter init="0" user="Ricardo"/> */}
      <TextChange/> 
      {/* <FuncionalCouter/> */}
      <ButtonSW/>
    </div>
  );
}

export default App
