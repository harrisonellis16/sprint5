import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './home.css'

class Home extends React.Component {


    render() {
        return (
            <div className='body-container'>
                <div className="body">
                    <h1>Welcome!</h1>
                    <hr />
                    <div className="text"> Whack-A-Rona is a place were you can relieve some stress during these crazy times.
                    You can also look up the closest COVID testing sites near your Ally Office Location.</div>
                    <br />
                    <Button className="button" href="/game">Whack-A-Rona</Button>
                    <Button href="/mapping">Ally Find-A-Rona</Button>
                </div>
            </div>
        )
    }
}

export default Home