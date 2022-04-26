import DefaultPage from 'components/DefaultPage'
import Menu from 'components/Menu'
import Cardapio from 'pages/Cardapio'
import Home from 'pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function  AppRouter() {
    return (
        <main>
            <BrowserRouter>
                <Menu />

                <Routes>
                    <Route
                        path="/"
                        element={ <DefaultPage /> }
                    >
                        <Route
                            index
                            element={ <Home /> }
                        />

                        <Route
                            path="cardapio"
                            element={ <Cardapio /> }
                        />
                    </Route>

                </Routes>
            </BrowserRouter>
        </main>
    )
}