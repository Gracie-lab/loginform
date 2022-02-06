import Header from "../components/header/Header";
import Signupform from "../components/form/signupform";
import Footer from "../components/footer/Footer";

function Signup() {
    return (
        <div className="App">
            <Header/>
            <Signupform />
            <Footer/>
        </div>
    )
}

export default Signup;