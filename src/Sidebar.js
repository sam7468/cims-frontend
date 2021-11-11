import React from 'react'
import './SidebarStyle.css'

function Sidebar(){
    return(
        <>
            <div className="sidebar-div">
                <ul>
                    <li>My Profile</li>
                    <li>Tasks</li>
                    <li>Network</li>
                    <li>Contract Mgmt</li>
                    <li>PMO</li>
                    <li>CIMC</li>
                    <li>CMS</li>
                    <li>R&R</li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar