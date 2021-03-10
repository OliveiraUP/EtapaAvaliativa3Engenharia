import React, { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';


const Page= ()=> {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/DadosInformacionais'), [history]);
    return(
    <div>
        <h3>Pesquisa de livros:</h3>
        <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={1} cols={40}  autoResize />
         <p>
        </p>
         <Button label="Pesquisar" />
          <p>
        </p>
        <div>
        <Button label="Limpar" icon="pi pi-check" iconPos="right" className="p-button-secondary"onClick={()=>setValue1('')} />
        </div>
        <h3>Dados do Livro:</h3>
         <h5></h5>
          <h5></h5>
                <InputTextarea value={value2} onChange={(e) => setValue2(e.target.value)} rows={5} cols={50} autoResize />
        <p>
        </p>
        <Button label="Renovar" onClick={handleOnClick} />
         <p>
        </p>
        
         <Button label="Reservar" className="p-button-success" onClick={handleOnClick}/>

    </div>
    );
}

export default Page;