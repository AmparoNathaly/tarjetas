import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Componentes/Compartidos/Layout';
import Primera from './Componentes/Main/Primera';
import Cuadricula from './Componentes/Main/Cuadricula/Cuadricula';
import About from './Componentes/Main/About';
import NoEncontrado from './Componentes/Compartidos/NoEncontrado';
import Malinois from './Componentes/Main/Detalles/Malinois';
import Collie from './Componentes/Main/Detalles/Collie';
import Aleman from './Componentes/Main/Detalles/Aleman';
import Blanco from './Componentes/Main/Detalles/Blanco';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Primera />}/>
        <Route path='/primera' element={<Primera />}/>
        <Route path='/pastores' element={<Cuadricula />}>
          <Route path='/pastores/1' element={<Collie />}/>
          <Route path='/pastores/2' element={<Malinois />}/>
          <Route path='/pastores/3' element={<Aleman />}/>
          <Route path='/pastores/4' element={<Blanco />}/>
        </Route>
        <Route path='/about' element={<About />}/>
      </Route>
      <Route path='*' element={<NoEncontrado />}></Route>
    </Routes>
  );
}

export default App;
