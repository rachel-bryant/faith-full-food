import '../styles.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <Navbar />
        {/* tree logo */}
        <div id="nav-logo">
            <img id="logo" alt="FaithFull Food logo" src="../public/images/logo.png"/>
            {/* apple logo --> people page */}
            <Link to="/People"><img title="Go to: People" id="apple" className="fruit" src="../public/images/fruit/apple.png"/></Link>
            {/* apricot logo --> projects page */}
            <Link to="/Projects"><img title="Go to: Projects" id="apricot" className="fruit" src="../public/images/fruit/apricot.png"/></Link>
            {/* banana logo --> purpose page */}
            <Link to="/Purpose"><img title="Go to: Purpose" id="banana" className="fruit" src="../public/images/fruit/banana.png"/></Link>
            {/* berry logo --> places page */}
            <Link to="/Places"><img title="Go to: Places" id="berry" className="fruit" src="../public/images/fruit/berry.png"/></Link>
            {/* grapes logo --> play your part page */}
            <Link to="/PlayYourPart"><img title="Go to: Play Your Part" id="grapes" className="fruit" src="../public/images/fruit/grapes.png"/></Link>
        </div>

        {/* HOME PAGE */}
        <div id="vision-and-values">
            {/* vision */}
            <div id="vision">
                <h1>Our Vision</h1>
                <p>To grow a <span className="bold">loving and peaceful planet</span> where anyone, anywhere can walk to <span className="bold">nourish body and soul</span>.</p>
            </div>
            {/* values */}
            <div id="values">
                <h1>Values</h1>
                <p>Generating relationships that: <span className="bold">feed</span>, <span className="bold">create</span>, and <span className="bold">grow faith</span> in the greater good.</p>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Home;