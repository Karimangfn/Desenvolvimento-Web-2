import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'

//Import das Paginas
import Home from './pages/Home'
import MapaDoSite from './pages/MapaDoSite';
import Dicas from './pages/Dicas'
import Header from './components/Header/'
import Footer from './components/Footer'
import Menu from './components/Menu'
import TrabalheConosco from './pages/TrabalheConosco';
import Blizzard from './pages/Noticias/Blizzard';
import CallofDuty from './pages/Noticias/CallofDuty';
import Cblol from './pages/Noticias/Cblol';
import Fortnite from './pages/Noticias/Fortnite';
import Ps5 from './pages/Noticias/Ps5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>  
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/Dicas" element={<Header />} />
                <Route path="/TrabalheConosco" element={<Header />} />
                <Route path="/MapaDoSite" element={<Header />} />
                <Route path="/BlizzardNews" element={<Header />} />
                <Route path="/CallOfDutyNews" element={<Header />} />
                <Route path="/CblolNews" element={<Header />} />
                <Route path="/FortniteNews" element={<Header />} />
                <Route path="/Ps5News" element={<Header />} />
            </Routes>
         
    
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/Dicas" element={<Menu />} />
                <Route path="/TrabalheConosco" element={<Menu />} />
                <Route path="/MapaDoSite" element={<Menu />} />
                <Route path="/BlizzardNews" element={<Menu />} />
                <Route path="/CallOfDutyNews" element={<Menu />} />
                <Route path="/CblolNews" element={<Menu />} />
                <Route path="/FortniteNews" element={<Menu />} />
                <Route path="/Ps5News" element={<Menu />} />
            </Routes>

     
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Dicas" element={<Dicas />} />
                <Route path="/TrabalheConosco" element={<TrabalheConosco />} />
                <Route path="/MapaDoSite" element={<MapaDoSite />} />
                <Route path="/BlizzardNews" element={<Blizzard />} />
                <Route path="/CallOfDutyNews" element={<CallofDuty />} />
                <Route path="/CblolNews" element={<Cblol />} />
                <Route path="/FortniteNews" element={<Fortnite />} />
                <Route path="/Ps5News" element={<Ps5 />} />
            </Routes>

            <Routes>
            <Route path="/" element={<Footer />} />
                <Route path="/Dicas" element={<Footer />} />
                <Route path="/TrabalheConosco" element={<Footer />} />
                <Route path="/MapaDoSite" element={<Footer />} />
                <Route path="/BlizzardNews" element={<Footer />} />
                <Route path="/CallOfDutyNews" element={<Footer />} />
                <Route path="/CblolNews" element={<Footer />} />
                <Route path="/FortniteNews" element={<Footer />} />
                <Route path="/Ps5News" element={<Footer />} />
            </Routes>
        </Router>
    </>
);