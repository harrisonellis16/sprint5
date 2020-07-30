import React from 'react';
import { Button } from 'react-bootstrap'
import './header.css'

class Header extends React.Component {


    render() {
        return (
            <ul>

                <li><a href="/">Home</a></li>
    
                <li><a href="/game">Whack-A-Rona</a></li>

                <li><a href="/mapping">Ally Find-A-Rona</a></li>

                <li><a href="/about">About</a></li>

                <h1 className="title">Whack-A-Rona</h1>

            </ul>
        )
    }
}

export default Header


/*
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/game">Whack-A-Rona</a></li>
  <li><a href="/mapping">Ally Find-A-Rona</a></li>
  <li><a href="/about">About</a></li>
</ul>
*/






/*original

    render() {
        return (
            <div>

                <Button variant="primary" href="/">Home</Button>
    
                <Button href="/game">Whack-A-Rona</Button>

                <Button href="/mapping">Ally Find-A-Rona</Button>

                <Button href="/about">About</Button>

            </div>
        )
    }
}

*/