import {BrowserRouter, Routes, Route} from "react-router-dom";
import './reset.css';
import './styles.css';

import Home from './pages/Home';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}