import axios from 'axios';
import { useState } from 'react';
import './App.css'
import Formulario from './Components/Formulario';

function App() {
    const [datos, setDatos] = useState([{ ciudad: '', pais: '' }]);

    const handleOnSubmit = async (datos) => {
        const api_key = "467eb2e2a1738c82e813a30610d7c354"
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${datos.ciudad},${datos.pais}&APPID=${api_key}`
        const result = await axios.get(URL)
        console.log(result)
    }

    return (
        <>
            <Formulario datos={datos} onSubmit={handleOnSubmit} />
        </>
    )
}

export default App
