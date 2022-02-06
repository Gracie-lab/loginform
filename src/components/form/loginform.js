import './formstyle.css'

function Loginform() {
    return (
        <>
            {/*<nav className="navigation-menu--mobile-container" role="navigation">*/}
            <div className="form">
                <text className="title">LOGIN</text>
                <form>
                    <label className="label1">
                        EMAIL ADDRESS:
                    </label>
                    <br/> <br/>
                    <input className="box" type="text" name="" />
                    <br/> <br/>
                    <div>
                        <label className="label2">
                            PASSWORD:
                        </label>
                        <text className="forgot-password">Forgot Password</text>
                    </div>
                    <br/> <br/>
                    <input className="box1" type="text" name="" />

                    <br/> <br/>

                    <input className="login-bar" type="submit" value="Login" />
                    <div>
                        <text className="not-a-member">Not a member?</text>
                        <button className="sign-up">Sign Up</button>
                    </div>
                </form>


                </div>

            {/*</nav>*/}
        </>
    );
}

export default Loginform;