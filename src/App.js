import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/css/Footer.css'
import '../src/css/Navigation.css'
import '../src/css/Nosotros.css'
import '../src/css/Servicios.css'
import '../src/css/Banner.css'
import '../src/css/Empresas.css'
import {Navigation} from './components/Navigation';
import {Banner} from './components/Banner';
import {Servicios} from './components/Servicios';
import {Footer} from './components/Footer';
import {Nosotros} from './components/Nosotros';
import {Proyectos} from './components/Proyectos';
import {Empresas} from './components/Empresas';

//
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <Nosotros/>
      <Servicios/>
      <Proyectos/>
      <Empresas/>
      <Footer/>
    </div>
  );
}

export default App;
