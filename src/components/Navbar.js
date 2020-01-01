import React from 'react'
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <span className='left'>Kyle Freyermuth</span>
                <span className='right'>
                    <div className='link-list'>
                        <Link to='/' className='link highlight'>Home</Link>
                        <Link to='/about' className='link highlight'>About</Link>
                        <Link to='/projects' className='link highlight'>Projects</Link>
                    </div>
                </span>
            </nav>
        )
    }
}