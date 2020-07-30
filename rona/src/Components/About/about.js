import React from 'react';
import './about.css';

class About extends React.Component {


    render() {
        return (
            <div className='body-container'>
                <div className="body">
                    <h1>Welcome!</h1>
                    <hr />
                    <div className="text"> Whack-A-Rona is a place were you can relieve some stress durning these crazy times.
                You can also look up the closest COVID testing sites near your Ally Office Location.</div>
                    <br />
                </div>
            </div>
        )
    }
}

export default About