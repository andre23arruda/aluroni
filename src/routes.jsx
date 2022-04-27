import DefaultPage from 'components/DefaultPage'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import About from 'pages/About'
import Cardapio from 'pages/Cardapio'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Prato from 'pages/Prato'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function  AppRouter() {
    return (
        <main>
            <BrowserRouter>
                <Menu />

                <Routes>
                    <Route path="/" element={ <DefaultPage /> }>
                        <Route
                            index
                            element={ <Home /> }
                        />

                        <Route
                            path="cardapio"
                            element={ <Cardapio /> }
                        />

                        <Route
                            path="sobre"
                            element={ <About /> }
                        />

                        <Route
                            path="prato/:id"
                            element={ <Prato /> }
                        />

                    </Route>

                    <Route path="*" element={ <NotFound /> } />
                </Routes>

                <Footer />
            </BrowserRouter>
        </main>
    )
}