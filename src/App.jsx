import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';
import Programs from './pages/Programs';
import Plot from './pages/Plot';
import Places from './pages/Places';
import PlayYourPart from './pages/PlayYourPart';

function App() {
    return (
        <>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/People" element={<People />} />
                <Route path="/Programs" element={<Programs />} />
                <Route path="/Plot" element={<Plot />} />
                <Route path="/Places" element={<Places />} />
                <Route path="/PlayYourPart" element={<PlayYourPart />} />
            </Routes>
        </HashRouter>
        </>
    )
}

export default App;