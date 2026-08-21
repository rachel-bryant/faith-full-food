import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';
import Projects from './pages/Projects';
import Purpose from './pages/Purpose';
import Places from './pages/Places';
import PlayYourPart from './pages/PlayYourPart';

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/People" element={<People />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Purpose" element={<Purpose />} />
                <Route path="/Places" element={<Places />} />
                <Route path="/PlayYourPart" element={<PlayYourPart />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;