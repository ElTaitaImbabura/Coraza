import React from 'react'
import Container from "./Container"
import Logo from "./Logo"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../index.css'


function Header() {
    // first we need the auth status to know if a user is logged in or not
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    // create a constant of navigation items, once we have that as an array we can loop through the items
    const navItems = [
        {
            name: "ENG",
            slug: "/",
            active: true
        },
        {
            name: "ESP",
            slug: "/studio",
            active: true
        }
    ]

    return (
        <header className='py-3 shadow' style={{ backgroundColor: 'black' }}>
            <nav className="grid grid-cols-3 items-center px-6">

                {/* LEFT: Logo */}
                <div className="flex justify-start">
                    <Link
                        to="/"
                        className="flex items-center justify-center w-16 h-16 rounded-full"
                        style={{ backgroundColor: "#2F3F5C" }}
                    >
                        <Logo /> 
                    </Link>
                </div>

                {/* CENTER: TITLE */}
                <div className="flex justify-center">
                    <h1
                        className="text-3xl md:text-4xl font-cinzel tracking-wide"
                        style={{ color: "#B8A03A" }}
                    >
                        Devenir Insurrectas
                    </h1>
                </div>

                {/* RIGHT: Language buttons */}
                <div className="flex justify-end">
                    <ul className="flex space-x-2 list-none">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className="px-6 py-2 text-lg rounded-full duration-200 hover:bg-blue-100"
                                    style={{ color: "#B8A03A" }}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </nav>

  
        </header>
    )
}

export default Header

