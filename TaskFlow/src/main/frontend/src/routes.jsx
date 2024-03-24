import {BrowserRouter, Routes, Route} from "react-router-dom";
import './reset.css';
import './styles.css';

import Home from './pages/Home';
import Inscricao from './pages/Inscricao';
import Tarefas from './pages/Tarefas';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/inscricao" element={<Inscricao/>}/>
                <Route path="/tarefas" element={<Tarefas/>}/>

                <Route path="*" element={<h1>Not Found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}