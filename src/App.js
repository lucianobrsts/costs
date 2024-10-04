import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newProject">Novo Projeto</Link>
        <Link to="/contact">Contato</Link>
      </div>
      <Switch>
          <Container customClass="min-height">
              <Route exact path='/'>
                <Home />
              </Route>

              <Route path='/company'>
                <Company />
              </Route>

              <Route path='/newProject'>
                <NewProject />
              </Route>

              <Route path='/contact'>
                <Contact />
              </Route>
          </Container>
      </Switch>

      <p>Footer</p>
    </Router>
  );
}

export default App;
