import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';


const Page=()=>{
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/PesquisadeLivros'), [history]);
  const handleOnClick1 = useCallback(() => history.push('/registro'), [history]);
    return(
    <div>
        <h3>Sistema de Gestão da Biblioteca Universitária Uva</h3>
        <p>
        </p>
        <h3>Matrícula: </h3>
        <span className="p-float-label">
          <InputText id="in" />
          <label htmlFor="in"></label>
        </span>
        <h3>Senha: </h3>
        <span className="p-float-label">
          <InputText id="in" />
          <label htmlFor="in"></label>
        </span>
        <p>
        </p>
        <Button label="Entrar" onClick={handleOnClick}/>
        <h3>Primeira vez, Registre-se aqui: </h3>
        <Button label="Registrar" className="p-button-warning" onClick={handleOnClick1} />
    </div>
    );
}

export default Page;