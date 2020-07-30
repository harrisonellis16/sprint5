import React from 'react';
import './whack.css'

class Whack extends React.Component {

    state = {
        score: 0,
        time: 0,
        gameIsLive: false,
        top: 0,
        left: 0,
        scale: 0,
        interval: null

    }


    startGame = () => {
        setInterval(() => {
            this.setState({time:this.state.count+1})

        }, 1000);

    }

    changeVirus = () => {

    }

    endGame = () => {

    }

    render() {
        return (
            <div className="game-container">
                
            </div>
        )
    }
}

export default Whack