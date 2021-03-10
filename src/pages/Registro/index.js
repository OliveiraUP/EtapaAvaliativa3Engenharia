import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';

const Page= ()=> {
  const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/PesquisadeLivros'), [history]);
    return(
    <div>
        <h3>Tela de Registro de Usuário:</h3>
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
        <h3>Nome Completo: </h3>
        <span className="p-float-label">
          <InputText id="in" />
          <label htmlFor="in"></label>
        </span>
        <h3>Endereço: </h3>
        <span className="p-float-label">
          <InputText id="in" />
          <label htmlFor="in"></label>
        </span>
        <h3>E-mail: </h3>
        <span className="p-float-label">
          <InputText id="in" />
          <label htmlFor="in"></label>
        </span>
        <p>
        </p>
        <Button label="Criar Conta" className="p-button-success" onClick={handleOnClick}/>
    </div>
    );
}

export default Page;