import React from "react";
import Navbar from "react-bootstrap/Navbar";
import './Navigation.css';

export default () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">
                Testory
            </Navbar.Brand>
        </Navbar>
    )
}