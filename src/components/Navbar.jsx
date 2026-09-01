import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useEffect } from "react";

function Navbar() {
    useEffect(() => {
        const nav = document.getElementById("nav-bar");
        const spacer = document.getElementById("spacer");

        const updateSpacer = () => {
            spacer.style.height = `${nav.offsetHeight + 30}px`;
        }
        updateSpacer();

        // when the nav height changes, update the spacer height
        const observer = new ResizeObserver(updateSpacer);
        // the observer is watching the nav bar
        observer.observe(nav); 

        return () => observer.disconnect();
    }, []);

    return (
        <>
        <header>
            <div id="nav-bar">
                <Link to="/" className="nav-link home-link">Home</Link>
                {/* people section */}
                <div id="people-dropdown">
                    <div className="nav-link">People</div>
                    <div id="people-dropdown-content">
                        <HashLink to="/People#co-founders" className="dropdown-link">Co-Founders & Founding Team</HashLink>
                        <HashLink to="/People#fellows" className="dropdown-link">Fellows</HashLink>
                        <HashLink to="/People#food-entrepreneurs" className="dropdown-link">Food Entrepreneurs (FoodE’s)</HashLink>
                        <HashLink to="/People#partners" className="dropdown-link">Partners</HashLink>
                        <HashLink to="/People#board" className="dropdown-link">Board</HashLink>
                    </div>
                </div>
                {/* projects section */}
                <div id="projects-dropdown">
                    <div className="nav-link">Projects</div>
                    <div id="projects-dropdown-content">
                        <Link to="/Projects" className="dropdown-link">Fellows Program</Link>
                        <Link to="/Projects" className="dropdown-link">Foodies</Link>
                        <Link to="/Projects" className="dropdown-link">Cornerstone Conversions</Link>
                        <Link to="/Projects" className="dropdown-link">The Collective Narrative Project</Link>
                        <Link to="/Projects" className="dropdown-link">De-CCC</Link>
                    </div>
                </div>
                {/* purpose section */}
                <div id="purpose-dropdown">
                    <div className="nav-link">Purpose</div>
                    <div id="purpose-dropdown-content">
                        <Link to="/Purpose" className="dropdown-link">Scripture & Contemportary Wisom</Link>
                        <Link to="/Purpose" className="dropdown-link">Carolyn's Weekly Letter</Link>
                    </div>
                </div>
                {/* places section */}
                <div id="places-dropdown">
                    <div className="nav-link">Places</div>
                    <div id="places-dropdown-content">
                        <Link to="/Places" className="dropdown-link">Newport St Retreat</Link>
                        <Link to="/Places" className="dropdown-link">UPark UMC</Link>
                    </div>
                </div>
                {/* play your part section */}
                <div id="part-dropdown">
                    <div className="nav-link">Play Your Part</div>
                    <div id="part-dropdown-content">
                        <Link to="/PlayYourPart" className="dropdown-link">Donations</Link>
                        <Link to="/PlayYourPart" className="dropdown-link">Merchandise</Link>
                        <Link to="/PlayYourPart" className="dropdown-link">Sign Up to Help</Link>
                        <Link to="/PlayYourPart" className="dropdown-link">Newsletter Sign Up</Link>
                    </div>
                </div>
            </div>
        </header>
        <div id="spacer"></div>
        </>
    )
}

export default Navbar;