import './formstyle.css'

function Form() {
    return (
        <>
            {/*<nav className="navigation-menu--mobile-container" role="navigation">*/}
            <div className="form">
                <h4>Login</h4>
                <form>
                    <label className="label1">
                        Email Address:
                    </label>
                    <br/> <br/>
                    <input className="box" type="text" name="" />
                    <br/> <br/>
                    <label className="label2">
                        Password:
                    </label>
                    <br/> <br/>
                    <input className="box1" type="text" name="" />
                    <br/> <br/>

                    <input className="login-bar" type="submit" value="Login" />
                </form>


                </div>

            {/*</nav>*/}
        </>
    );
}

export default Form;