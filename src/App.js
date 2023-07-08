import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/css/Footer.css'
import '../src/css/Navigation.css'
import '../src/css/Nosotros.css'
import '../src/css/Servicios.css'
import '../src/css/Banner.css'
import '../src/css/Empresas.css'
import '../src/css/Clientes.css'
import '../src/css/Portada1.css'
import '../src/css/Portada3.css'
import '../src/css/Contactanos.css'
import '../src/css/Navigation2.css'



import {Navigation} from './components/Navigation';
import {Banner} from './components/Banner';
import {Servicios} from './components/Servicios';
import {Footer} from './components/Footer';
import {Nosotros} from './components/Nosotros';
import {Proyectos} from './components/Proyectos';
import {Empresas} from './components/Empresas';
import {Clientes} from './components/Clientes';
import {Portada1} from './components/Portada1';
import {Contactanos} from './components/Contactanos';
import {Portada3} from './components/Portada3';
import {Mision} from './components/Mision';
import {Portada4} from './components/Portada4';
import {Navigation2} from './components/Navigation2';
import {Navigation3} from './components/Navigation3';

//
function App() {
  return (
    <div className="App">
      
      <Navigation2/>
      <Navigation3/>

      <Portada4/>
      <Mision/>

      <Nosotros/>
      <Servicios/>
      <Proyectos/>
      <Clientes/>

      <Footer/>
    </div>
  );
}

export default App;
