function Footer() {
    return (
        <>
        <footer id="footer">
            <img src={`${import.meta.env.BASE_URL}images/logo-text.png`} id="text-logo"/>
            <div id="footer-content">
                <p>Follow us on Instagram: <a className="external-link" href="https://www.instagram.com/faithfull.food/" target="_blank"><i id="instagram" className="fa-brands fa-instagram"></i></a></p>
            </div>
        </footer>
        </>
    )
}

export default Footer;