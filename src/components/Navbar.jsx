function Navbar() {
    return (
        <>
        <header>
            <div id="nav-bar">
                <a href="./index.html" className="nav-link">Home</a>
                {/* people section */}
                <div id="people-dropdown">
                    <a id="people-link" class="nav-link">People</a>
                    <div id="people-dropdown-content">
                        <a href="" className="dropdown-link">Board of Directors</a>
                        <a href="" className="dropdown-link">Co-Founding Team</a>
                        <a href="" className="dropdown-link">Food Entrepreneurs</a>
                        <a href="" className="dropdown-link">Partners</a>
                        <a href="" className="dropdown-link">Fellows</a>
                    </div>
                </div>
                {/* projects section */}
                <div id="projects-dropdown">
                    <a className="nav-link">Projects</a>
                    <div id="projects-dropdown-content">
                        <a href="" className="dropdown-link">Fellows Program</a>
                        <a href="" className="dropdown-link">Foodies</a>
                        <a href="" className="dropdown-link">Cornerstone Conversions</a>
                        <a href="" className="dropdown-link">The Collective Narrative Project</a>
                        <a href="" className="dropdown-link">De-CCC</a>
                    </div>
                </div>
                {/* purpose section */}
                <div id="purpose-dropdown">
                    <a href="" className="nav-link">Purpose</a>
                    <div id="purpose-dropdown-content">
                        <a href="" className="dropdown-link">The Collective Narrative Project</a>
                        <a href="" className="dropdown-link">Scripture & Contemporary Wisdom</a>
                        <a href="" className="dropdown-link">Carolyn's Weekly Letter</a>
                    </div>
                </div>
                {/* places section */}
                <div id="places-dropdown">
                    <a href="" className="nav-link">Places</a>
                    <div id="places-dropdown-content">
                        <a href="" className="dropdown-link">Newport St Retreat</a>
                        <a href="" className="dropdown-link">UPark UMC</a>
                    </div>
                </div>
                {/* play your part section */}
                <div id="part-dropdown">
                    <a href="" className="nav-link">Play Your Part</a>
                    <div id="part-dropdown-content">
                        <a href="" className="dropdown-link">Donations</a>
                        <a href="" className="dropdown-link">Merchandise</a>
                        <a href="" className="dropdown-link">Sign Up to Help</a>
                        <a href="" className="dropdown-link">Newsletter Sign Up</a>
                    </div>
                </div>
            </div>
        </header>
        <div id="spacer"></div>
        </>
    )
}

export default Navbar;