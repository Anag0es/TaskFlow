import {BrowserRouter, Routes, Route} from "react-router-dom";
import './reset.css';
import './styles.css';

import Home from './pages/Home';
import Inscricao from './pages/Inscricao';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/inscricao" element={<Inscricao/>}/>
            </Routes>
        </BrowserRouter>
    )
}