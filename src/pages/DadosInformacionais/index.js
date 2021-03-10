import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';


const Page= ()=> {
    const [value2, setValue2] = useState('O prazo limite para retornar o livro é de 21 dias.\n Você tem direito a reservar mais __ livro(s).\n O prazo máximo para retirar um livro reservado é de 3 dias.\n A multa para casos de atrasos será de R$ 0,50 por dia.  ');
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);
    return(
    <div>
        <h3>Dados informacionais:</h3>
        <h5></h5>
          <h5></h5>
                <InputTextarea value={value2} onChange={(e) => setValue2(e.target.value)} rows={5} cols={70} autoResize />
          <p>
        </p>
        <Button label="Voltar a tela Inicial" onClick={handleOnClick} /> 
    </div>
    );
}

export default Page;