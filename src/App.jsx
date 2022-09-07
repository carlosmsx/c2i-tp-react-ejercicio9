import React from 'react';
import Formulario from './components/Formulario';

const App = () => {
    return (
        <div className='container-fluid'>
            <h2 className='text-center my-4'>Administrador pacientes de veterinaria</h2>
            <Formulario/>
        </div>
    );
};

export default App;