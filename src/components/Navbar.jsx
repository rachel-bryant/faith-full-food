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
                <HashLink to="/#home" className="nav-link home-link">Home</HashLink>
                {/* people section */}
                <div id="people-dropdown">
                    <div className="nav-link">People&ensp;<img className="small-logo" src={`${import.meta.env.BASE_URL}images/fruit/apple.png`} /></div>
                    <div id="people-dropdown-content">
                        <HashLink to="/People#co-founders" className="dropdown-link">Co-Founders & Founding Team</HashLink>
                        <HashLink to="/People#fellows" className="dropdown-link">Fellows</HashLink>
                        <HashLink to="/People#food-entrepreneurs" className="dropdown-link">Food Entrepreneurs (FoodE’s)</HashLink>
                        {/* <HashLink to="/People#partners" className="dropdown-link">Partners</HashLink> */}
                        {/* <HashLink to="/People#board" className="dropdown-link">Board</HashLink> */}
                    </div>
                </div>
                {/* programs section */}
                <div id="projects-dropdown">
                    <div className="nav-link">Programs&ensp;<img className="small-logo" src={`${import.meta.env.BASE_URL}images/fruit/apricot.png`} /></div>
                    <div id="projects-dropdown-content">
                        <HashLink to="/Programs#cnp" className="dropdown-link">The Collective Narrative Project</HashLink>
                        <HashLink to="/Programs#do-food" className="dropdown-link">Do Food</HashLink>
                        <HashLink to="/Programs#cornerstone" className="dropdown-link">Cornerstone Conversions</HashLink>
                        <HashLink to="/Programs#hydroponics" className="dropdown-link">Hydroponics</HashLink>
                        <HashLink to="/Programs#culture" className="dropdown-link">Growing Church Culture</HashLink>
                    </div>
                </div>
                {/* purpose section */}
                <div id="purpose-dropdown">
                    <div className="nav-link">Plot&ensp;<img className="small-logo" src={`${import.meta.env.BASE_URL}images/fruit/blueberry.png`} /></div>
                    <div id="purpose-dropdown-content">
                        <HashLink to="/Plot#scripture" className="dropdown-link">Scripture & Contemportary Wisom</HashLink>
                        {/* <HashLink to="/Plot#weekly-letter" className="dropdown-link">Carolyn's Weekly Letter</HashLink> */}
                    </div>
                </div>
                {/* places section */}
                {/* <div id="places-dropdown">
                    <div className="nav-link">Places&ensp;<img className="small-logo" src={`${import.meta.env.BASE_URL}images/fruit/berry.png`} /></div>
                    <div id="places-dropdown-content">
                        <Link to="/Places" className="dropdown-link">Newport St Retreat</Link>
                        <Link to="/Places" className="dropdown-link">UPark UMC</Link>
                    </div>
                </div> */}
                {/* play your part section */}
                <div id="part-dropdown">
                    <div className="nav-link">Play Your Part&ensp;<img className="small-logo" src={`${import.meta.env.BASE_URL}images/fruit/grapes.png`} /></div>
                    <div id="part-dropdown-content">
                        <HashLink to="/PlayYourPart#volunteer" className="dropdown-link">Volunteer</HashLink>
                        <HashLink to="/PlayYourPart#give" className="dropdown-link">Give</HashLink>
                        <HashLink to="/PlayYourPart#connect" className="dropdown-link">Connect</HashLink>
                    </div>
                </div>
            </div>
        </header>
        <div id="spacer"></div>
        </>
    )
}

export default Navbar;