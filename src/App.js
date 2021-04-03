import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import BootstrapNavbar from './components/BootstrapNavbar'
import Home from './pages/Home'
import Info from './pages/Info'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Router>
      <Container>
      <header>
        <BootstrapNavbar />
      </header>
      <main>
        <Route exact path ='/' component={Home} />
        <Route exact path ='/info' component={Info} />
      </main>
      </Container>
    </Router>
  );
}

export default App;
