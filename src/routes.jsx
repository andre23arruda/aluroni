import Cardapio from 'pages/Cardapio'
import Home from 'pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function  AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ <Home /> }
                />

                <Route
                    path="/cardapio"
                    element={ <Cardapio /> }
                />
            </Routes>
        </BrowserRouter>
    )
}