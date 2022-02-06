import './footerStyle.css'


function Footer() {
    return (
        <>
            {/*<nav className="navigation-menu--mobile-container" role="navigation">*/}
            <div className="footer-style">
                <div>
                    <h1 className="text">Burger</h1>
                </div>
                <div className= "footer-links">
                    <h4>Links</h4>
                    <h4 >link1</h4>
                    <h4 >linnk2</h4>
                </div>
                <div className= "footer-links">
                    <h4>Navigation</h4>
                    <h4 className="sub-links">link1</h4>
                    <h4 className="sub-links">linnk2</h4>
                </div>
                <div>
                    <h4>About Us</h4>
                    <h4>link1</h4>
                    <h4>linnk2</h4>
                </div>
                <div>
                    <h4>Newsletter</h4>
                    <h4>Join our news letter for news and update</h4>
                    <h4>linnk2</h4>
                </div>
                <text >2020 Burger. All Right Reserved</text>
            </div>
            {/*</nav>*/}
        </>
    );
}

export default Footer;