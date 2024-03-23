import {BrowserRouter, Routes, Router} from "react-router-dom";
import './reset.css';
import './styles.css';

import Home from './pages/Home';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}