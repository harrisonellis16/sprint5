import React from 'react';
import { Button } from 'react-bootstrap'
import './home.css'

class Home extends React.Component {


    render() {
        return (
            <div className='body-container'>
                <div className="body">
                    <h1>Welcome!</h1>
                    <hr />
                    <div className="text"> Whack-A-Rona is a place where you can relieve some stress during these crazy times.
                    You can also look up the closest COVID-19 testing sites near your Ally Office Location.</div>
                    <br />
                    <Button className="button" href="/game">Whack-A-Rona</Button>
                    <Button className="button" href="/mapping">Ally Find-A-Rona</Button>
                </div>
            </div>
        )
    }
}

export default Home