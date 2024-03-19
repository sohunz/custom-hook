import React from "react";
import Home from "./components/Home";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import UserProvider from "./contexts/UserProvider";
import UserDetail from "./pages/UserDetail";

const App = () => {
    return (
        <UserProvider>
            <div className="m-5">
                <div className="flex flex-row gap-5 mb-5">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>{" "}
                <hr className="mb-5" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/user/detail/:id" element={<UserDetail />} />
                </Routes>
            </div>
        </UserProvider>
    );
};

export default App;
