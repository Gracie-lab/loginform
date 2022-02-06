import './headerstyle.css'
import '../icons/Ellipse 6.png'
import '../icons/Ellipse 7.png'
import '../icons/Ellipse 8.png'

function Header() {
    return (
        <>
            {/*<nav className="navigation-menu--mobile-container" role="navigation">*/}
            <div className="header-style">
                    <div>
                        <h1 className="text">Burger</h1>
                    </div>
                    <div className= "header-links">
                        <h4 >Home</h4>
                        <h4 >Services</h4>
                        <h4 >About Us</h4>
                       <div className= "login-div"><h4 >Login</h4></div>
                        <div className="signup-div"><h4 >Sign Up</h4></div>
                    </div>
                <div>
                    <img src="Ellipse 6" alt="facebook"/>
                    <img src="Ellipse 7" alt="instagram"/>
                    <img src="Ellipse 8" alt="twitter"/>
                </div>
            </div>
            {/*</nav>*/}
        </>
    );
}

export default Header;