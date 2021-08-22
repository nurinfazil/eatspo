import React from 'react'
import Header from "../Layout/Header"
import Footer from "../Layout/FooterMenu"

import { Link } from "react-router-dom"

import { Button } from "react-bootstrap"

import AddNew from "../../images/add-new-icon.png"

import "./Home.css"

const Home = () => {
    return (
        <div className="feed">
            <Header pageTitle="feed" />
            <Footer activePage="feed" />
            <Link to="/new-post">
                <Button className="add-new-post">
                    <img src={AddNew} />
                </Button>
            </Link>
            <h1>stuff</h1>
            <h1>stuff</h1><h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1><h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1><h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1><h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
        </div>
    )
}

export default Home
