import '../styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';

function Purpose() {
    return (
        <>
        <Navbar />
        <h1 className="purpose-header">Purpose</h1>
        <img className="purpose-main-img" src="../public/images/purpose/bahg.png" />
        <div className="purpose-section">
            <p>We are solving for much more than <span className="bold">hunger</span>. We are solving for <span className="bold">connection</span>. </p>
        </div>
        <Footer />
        </>
    )
}

export default Purpose;