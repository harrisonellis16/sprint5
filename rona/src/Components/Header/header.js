import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {


    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/game">Whack-A-Rona</Link>
                </li>
                <li>
                    <Link to="/mapping">Ally Find-A-Rona</Link>
                </li>
            </ul>
        )
    }
}

export default Header