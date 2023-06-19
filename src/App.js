import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/css/Footer.css'
import '../src/css/Navigation.css'
import '../src/css/Nosotros.css'
import '../src/css/Servicios.css'
import '../src/css/Banner.css'
import '../src/css/Empresas.css'
import '../src/css/Clientes.css'
import {Navigation} from './components/Navigation';
import {Banner} from './components/Banner';
import {Servicios} from './components/Servicios';
import {Footer} from './components/Footer';
import {Nosotros} from './components/Nosotros';
import {Proyectos} from './components/Proyectos';
import {Empresas} from './components/Empresas';
import {Clientes} from './components/Clientes';

//
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <Clientes/>
      <Nosotros/>
      <Servicios/>
      <Proyectos/>
      <Footer/>
    </div>
  );
}

export default App;
