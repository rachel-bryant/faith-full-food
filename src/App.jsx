import './styles.css';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
        <Navbar />

        {/* HOME PAGE */}
        <div id="vision-and-values">
            {/* vision */}
            <div id="vision">
                <h1>Our Vision</h1>
                <p>To grow a loving and peaceful planet where anyone, anywhere can walk to nourish body and soul.</p>
            </div>
            {/* values */}
            <div id="values">
                <h1>Values</h1>
                <p>Generating relationships that: feed, create, and grow faith in the greater good.</p>
            </div>
        </div>
        </>
    )
}

export default App;