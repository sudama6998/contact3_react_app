import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CreateContact from './component/CreateContact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={CreateContact}/>
      </Router>
    </div>
  );
}

export default App;
