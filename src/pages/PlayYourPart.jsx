import '../styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';

function PlayYourPart() {
    return (
        <>
        <Navbar />
        <h1 className="part-header">Play Your Part</h1>
        <div className="part-section">
            <p>There is space for everyone to do their part and we hope you will join us in our movement!</p>
        </div>
        <div className="get-involved purple">
            <div className="home-main">
                <h1>Get Involved</h1>
                <p>This is a growing movement and the best ideas come when people see themselves as a part of this thing. Whether you want to donate time, resources or finances, we want you to root into hope and grow this movement with us!</p>
            </div>

            <div className="home-sections">
                {/* VOLUNTEER */}
                <div className="home-section purple">
                    <h1 id="volunteer">Volunteer</h1>
                    <p>Sign-up to volunteer with us! As we grow, our volunteer opportunities will grow as well. Check back for more information or connect with us to seed something new!</p>
                    <a className="sign-up-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSeP8u4ZCQL75yJquarm4Jh335vHumlgdfBrO5q6Nal8mM7D-Q/viewform?usp=header" target="_blank">Sign Up</a>
                </div>

                {/* GIVE */}
                <div className="home-section purple">
                    <h1 id="give">Give</h1>
                    <p>Could you help provide <span className="bold">“Lunch on Us”</span> for our partners, participants or project leaders? Could you help fund sandwich provisions, transportation costs or fuel our project ministries? We so appreciate you and thank you for your generosity!</p>
                </div>

                {/* CONNECT */}
                <div className="home-section purple">
                    <h1 id="connect">Connect</h1>
                    <p>Have a great idea or looking to get more involved? Whether church, young adult, entrepreneur or beyond, we need you! Let us know what you’re thinking so we can weave you and your spirit into this movement. </p>
                    <a className="home-email" href="mailto:info@FaithFull.Food">info@FaithFull.Food</a>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default PlayYourPart;