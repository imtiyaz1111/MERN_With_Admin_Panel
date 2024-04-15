import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaUserLarge } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";

const Adminlayout = () => {
  return (
    <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li> <NavLink to="/admin/users" ><FaUserLarge /> Users</NavLink> </li>
                    <li> <NavLink to="/admin/contacts"><RiContactsBookLine /> Contacts</NavLink> </li>
                    <li> <NavLink to="/admin/Services"><FaServicestack /> Services</NavLink> </li>
                    <li> <NavLink to="/"><MdHomeFilled /> Home</NavLink> </li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
  )
}

export default Adminlayout
