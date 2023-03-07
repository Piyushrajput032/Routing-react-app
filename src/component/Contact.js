import React from 'react'
import {  Routes, Route, Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Contact() {
    return (
        <div>
            <h1>This is ontact page </h1>
            <p> Hello this is a a developer page profile</p>

            <Link to='company'>Company</Link>
            <Link to='channel'>Channel</Link>
            <Link to='others'>Others</Link>
            <Outlet />


        </div>
    )
}

export default Contact