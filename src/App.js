import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header     from './components/Header';
import Footer     from './components/Footer';
import Main       from './pages/Main';
import Public     from './pages/Public';
import Prive      from './pages/Prive';
import Conseil    from './pages/Conseil';
import Devis      from './pages/Devis';
import contact    from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/secteur-public" component={Public} />
          <Route path="/secteur-prive" component={Prive} />
          <Route path="/conseil-et-audit" component={Conseil} />
          <Route path="/contact" component={contact} />
          <Route path="/devis" component={Devis} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
