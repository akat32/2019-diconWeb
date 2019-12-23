import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export const Nav = () => {
    return (
        <div className = "Nav">
            <Link className = "navB" to = '/'>
                <div className = "home btn"/>
            </Link>
            <Link className = "navB" to = '/basket'>
                <div className = "bas btn"/>
            </Link>
            <Link className = "navB" to = '/Setting'>
                <div className = "setting btn"/>
            </Link>
        </div>
    )
}