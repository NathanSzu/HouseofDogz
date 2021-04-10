import { BrowserRouter as Router, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
import BootstrapNavbar from './components/BootstrapNavbar'
import BootstrapBotNavbar from './components/BootstrapBotNavbar'
import Home from './pages/Home'
import Info from './pages/Info'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Container>
          <header>
            <BootstrapNavbar />
          </header>
          <main>
            <Route exact path='/' component={Home} />
            <Route exact path='/info' component={Info} />
          </main>
          <footer className='footer'>
            <BootstrapBotNavbar />
          </footer>
        </Container>
      </Router>
    </HelmetProvider>
  );
}

export default App;
