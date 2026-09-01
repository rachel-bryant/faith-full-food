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

        {/* MISSION */}
        <div className="mission">
            <h1>Our Mission:</h1>
            <p>Growing connection by doing food.</p>
        </div>

        <div id="home-sections">
            {/* VISION */}
            <div className="home-section">
                <h1>Our Vision</h1>
                <p>To grow a <span className="bold">loving and peaceful planet</span> where anyone, anywhere can walk to <span className="bold">nourish body and soul</span>.</p>
            </div>

            {/* VALUES */}
            <div className="home-section">
                <h1>Values</h1>
                <p>Generating relationships that: <span className="bold">feed</span>, <span className="bold">create</span>, and <span className="bold">grow faith</span> in the greater good.</p>
            </div>

            {/* MODEL */}
            <div className="home-section">
                <h1>Our Model</h1>
                <p>We seed and grow relationships between church communities, food entrepreneurs and young adults by co-creating localized food ecosystems, Together, we transform underutilized church spaces into equity-aligned and sustainably-purposed nourishment centers that weave proximal people into regenerative communities.</p>
            </div>

            {/* GET INVOLVED */}
            <div className="home-section">
                <h1>Get Involved</h1>
                <p>This is a growing movement and the best ideas come when people see themselves as a part of this thing. Whether you want to donate time, resources or finances, we want you to root into hope and grow this movement with us!</p>
            </div>

            {/* VOLUNTEER */}
            <div className="home-section">
                <h1>Volunteer</h1>
                <p>Sign-up to volunteer with us! As we grow, our volunteer opportunities will grow as well. Check back for more information or connect with us to seed something new!</p>
                <a className="sign-up-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSeP8u4ZCQL75yJquarm4Jh335vHumlgdfBrO5q6Nal8mM7D-Q/viewform?usp=header" target="_blank">Sign Up</a>
            </div>

            {/* GIVE */}
            <div className="home-section">
                <h1>Give</h1>
                <p>Could you help provide <span className="bold">“Lunch on Us”</span> for our partners, participants or project leaders? Could you help fund sandwich provisions, transportation costs or fuel our project ministries? We so appreciate you and thank you for your generosity!</p>
            </div>

            {/* CONNECT */}
            <div className="home-section">
                <h1>Connect</h1>
                <p>Have a great idea or looking to get more involved? Whether church, young adult, entrepreneur or beyond, we need you! Let us know what you’re thinking so we can weave you and your spirit into this movement. </p>
            </div>
        </div>

        <Footer/>
        </>
    );
}

export default Home;