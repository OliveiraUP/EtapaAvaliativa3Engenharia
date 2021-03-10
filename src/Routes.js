import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import DadosInformacionais from './pages/DadosInformacionais';
import PesquisadeLivros from './pages/PesquisadeLivros';
import Registro from './pages/Registro';

export default () => {
   return (
     <Switch>
        <Route exact path="/">
           <Home />
        </Route>

        <Route exact path="/registro">
           <Registro />
        </Route>

        <Route exact path="/PesquisadeLivros">
           <PesquisadeLivros />
        </Route>

         <Route exact path="/DadosInformacionais">
           <DadosInformacionais />
        </Route>


     </Switch>
   );
}