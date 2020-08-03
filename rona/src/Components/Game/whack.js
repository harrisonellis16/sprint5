import React from 'react';
import './whack.css';
import { Button, Form } from 'react-bootstrap';
import corona from '../../corona-removebg-preview.png';

class Whack extends React.Component {

    state = {
        score: 0,
        time: 0.0,
        gameLength: 10,
        gameIsLive: false,
        gameOver: false,
        user: "",
        interval: null,

        covid1: {
            top: 0,
            left: 0,
            width: 0
        },
        covid2: {
            top: 0,
            left: 0,
            width: 0
        },
        covid3: {
            top: 0,
            left: 0,
            width: 0
        },
        covid4: {
            top: 0,
            left: 0,
            width: 0
        },
        covid5: {
            top: 0,
            left: 0,
            width: 0
        }
    }

    componentDidMount() {

    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    startGame = (e) => {
        e.preventDefault();

        this.changeVirus(1);
        this.changeVirus(2);
        this.changeVirus(3);
        this.changeVirus(4);
        this.changeVirus(5);

        this.setState({
            gameIsLive: true,
            gameOver: false,
            interval:
                setInterval(() => {

                    //console.log((this.state.time.toFixed(1) % 1).toFixed(1))
                    if ((this.state.time.toFixed(1) % 1).toFixed(1) == 0.1) {
                        this.changeVirus(1);
                    }
                    if ((this.state.time.toFixed(1) % 1).toFixed(1) == 0.3) {
                        this.changeVirus(2);
                    }
                    if ((this.state.time.toFixed(1) % 1).toFixed(1) == 0.5) {
                        this.changeVirus(3);
                    }
                    if ((this.state.time.toFixed(1) % 1).toFixed(1) == 0.7) {
                        this.changeVirus(4);
                    }
                    if ((this.state.time.toFixed(1) % 1).toFixed(1) == 0.9) {
                        this.changeVirus(5);
                    }


                    if (this.state.time.toFixed(1) >= this.state.gameLength) {
                        this.endGame()
                    }
                    else {
                        this.setState({ time: this.state.time + 0.1 })
                    }

                }, 100)
        })

    }

    changeVirus = (number) => {
        const width = this.getRandomInt(10, 30);
        const top = this.getRandomInt(0, 100 - width);
        const left = this.getRandomInt(0, 100 - width);

        if (number === 1) {
            this.setState({
                covid1: {
                    top: top,
                    left: left,
                    width: width
                }
            })
        }
        else if (number === 2) {
            this.setState({
                covid2: {
                    top: top,
                    left: left,
                    width: width
                }
            })
        }
        else if (number === 3) {
            this.setState({
                covid3: {
                    top: top,
                    left: left,
                    width: width
                }
            })
        }
        else if (number === 4) {
            this.setState({
                covid4: {
                    top: top,
                    left: left,
                    width: width
                }
            })
        }
        else if (number === 5) {
            this.setState({
                covid5: {
                    top: top,
                    left: left,
                    width: width
                }
            })
        }



    }

    coronaHit = (number) => {


        this.setState({ score: this.state.score + 100 }, this.changeVirus(number));
        
    }

    endGame = () => {
        clearInterval(this.state.interval)
        this.setState({
            time: 0.0,
            gameIsLive: false,
            gameOver: true
        })

    }

    createScore = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': "Basic dGVzdHVzZXI6dGVzdHBhc3N3b3Jk" },
            body: JSON.stringify({
                "score": this.state.score,
                "userName": this.state.user,
        })
        }
        fetch(`https://whack-a-rona.herokuapp.com/Leaderboard/score`, requestOptions)
        .then(res => res.json())
        .then((data) => {
            this.props.history.push(`/leaderboard/${this.state.user}`)
            //console.log(data)
        })
        .catch(console.log(requestOptions))
    }

    render() {
        return (
            <div className={this.state.gameIsLive ? "game-container-full" : "game-container"}>
                {
                    !this.state.gameIsLive &&
                    <div className="game-start">
                        {
                            this.state.gameOver &&
                            <div className="game-over">
                                <h1>Time is up!</h1>
                                <h2>Your Score: {this.state.score}</h2>
                                <Form.Control className="user-submit" type="text" placeholder="Enter a Username" value={this.state.user} onChange={(e) => this.setState({user: e.target.value})}/>
                                <Button variant="primary" onClick={this.createScore}>Submit Score</Button>
                            </div>
                        }
                        <img src={corona} alt=""/>
                        <h1 className="game-start-title">
                            Play Whack-a-Rona!
                        </h1>
                        <Button onClick={this.startGame}>
                            Start Game
                        </Button>
                    </div>
                }

                {this.state.gameIsLive &&
                    <div className="game-window">
                        <img
                            className="corona-button"
                            alt=""
                            style={{
                                top: `${this.state.covid1.top}vh`,
                                left: `${this.state.covid1.left}vw`,
                                width: `${this.state.covid1.width}vmin`,
                                height: `${this.state.covid1.width}vmin`,
                            }}
                            src={corona}
                            onClick={() => this.coronaHit(1)}
                        />
                        <img
                            className="corona-button"
                            alt=""
                            style={{
                                top: `${this.state.covid2.top}vh`,
                                left: `${this.state.covid2.left}vw`,
                                width: `${this.state.covid2.width}vmin`,
                                height: `${this.state.covid2.width}vmin`,
                            }}
                            src={corona}
                            onClick={() => this.coronaHit(2)}
                        />
                        <img
                            className="corona-button"
                            alt=""
                            style={{
                                top: `${this.state.covid3.top}vh`,
                                left: `${this.state.covid3.left}vw`,
                                width: `${this.state.covid3.width}vmin`,
                                height: `${this.state.covid3.width}vmin`,
                            }}
                            src={corona}
                            onClick={() => this.coronaHit(3)}
                        />
                        <img
                            className="corona-button"
                            alt=""
                            style={{
                                top: `${this.state.covid4.top}vh`,
                                left: `${this.state.covid4.left}vw`,
                                width: `${this.state.covid4.width}vmin`,
                                height: `${this.state.covid4.width}vmin`,
                            }}
                            src={corona}
                            onClick={() => this.coronaHit(4)}
                        />
                        <img
                            className="corona-button"
                            alt=""
                            style={{
                                top: `${this.state.covid5.top}vh`,
                                left: `${this.state.covid5.left}vw`,
                                width: `${this.state.covid5.width}vmin`,
                                height: `${this.state.covid5.width}vmin`,
                            }}
                            src={corona}
                            onClick={() => this.coronaHit(5)}
                        />
                        <h2 className="game-timer">Time: {(this.state.gameLength - this.state.time).toFixed(1)}</h2>
                        <h2 className="game-score">Score: {this.state.score}</h2>
                    </div>
                }
            </div>
        )
    }
}

export default Whack

//time: {this.state.time.toFixed(1)}