import {BrowserRouter, Routes, Router} form "react-router-dom";
import './react.css';
import './style.css';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}