import React from "react";
import {BrowserRouter as Browser, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";


const AppRoute = () => {
    return (
        <Browser>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>


            </Routes>
        </Browser>

    );
}


export default AppRoute;