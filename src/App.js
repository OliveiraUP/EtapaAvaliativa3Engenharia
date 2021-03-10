import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
  <BrowserRouter> 
    <div className="App" >
      <header className="App-header">
          <Routes />
          
      </header>
    </div>
  </BrowserRouter> 
  );
}

export default App;
