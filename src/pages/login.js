import Header from "../components/header/Header";
import Loginform from "../components/form/loginform";
import Footer from "../components/footer/Footer";


function Login() {
    return (
        <div className="App">
            <Header/>
            <Loginform />
            <Footer/>
        </div>
    )
}

export default Login;