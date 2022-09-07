import React from 'react';
import Formulario from './components/Formulario';

const App = () => {
    return (
        <div className='container-fluid'>
            <h1 className='display-6 text-center'>Administrador pacientes de veterinaria</h1>
            <Formulario/>
        </div>
    );
};

export default App;