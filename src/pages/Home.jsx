import '../styles.css';
import Navbar from '../components/Navbar.jsx';

function Home() {
    return (
        <>
        <Navbar />
        {/* tree logo */}
        <div id="nav-logo">
            <img id="logo" alt="FaithFull Food logo" src="../public/images/logo.png"/>
            {/* apple logo --> people page */}
            <a href=""><img title="Go to: People" id="apple" className="fruit" src="../public/images/fruit/apple.png"/></a>
            {/* apricot logo --> projects page */}
            <a href=""><img title="Go to: Projects" id="apricot" className="fruit" src="../public/images/fruit/apricot.png"/></a>
            {/* banana logo --> purpose page */}
            <a href=""><img title="Go to: Purpose" id="banana" className="fruit" src="../public/images/fruit/banana.png"/></a>
            {/* berry logo --> places page */}
            <a href=""><img title="Go to: Places" id="berry" className="fruit" src="../public/images/fruit/berry.png"/></a>
            {/* grapes logo --> play your part page */}
            <a href=""><img title="Go to: Play Your Part" id="grapes" className="fruit" src="../public/images/fruit/grapes.png"/></a>
        </div>

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
    );
}

export default Home;