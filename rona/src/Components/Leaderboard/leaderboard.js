import React from 'react';
import './leaderboard.css'
import corona from '../../corona-removebg-preview.png';
import { Form, Button } from 'react-bootstrap'

class Leaderboard extends React.Component {

    state = {
        scores: [],
        searchID: "",
        lastScore: null,
        newScore: "",
        userName: this.props.match.params.id,
        tempName: "",
    }


    componentDidMount() {

        fetch('https://whack-a-rona.herokuapp.com/Leaderboard/score')
            .then(res => res.json())
            .then((data) => {
                var scores = data
                scores.sort((a, b) => b.score - a.score)
                this.setState({ scores: scores })
                console.log(data)
            })
            .catch(console.log('We have an error'))
    }

    findUser = () => {
        this.props.history.push(`/leaderboard/${this.state.tempName}`)
        window.location.reload()
    }

    Score = ({ newScore, list }) => {
        console.log(this.props.match)
        return (
            <div className="score-row">
                <h5 className="score-name">{newScore.userName}</h5>
                <h5 className="score-score" >{newScore.score}</h5>
            </div>
        )
    }

    render() {
        return (
            <div className="b">

                <div className="globalScores">
                    <div className="leader-box">
                        <h3>
                            <img className="logo" src={corona} width="40" height="40" alt="" class="d-inline-block align-top" />
                        Leaderboard
                        <img className="logo" src={corona} width="40" height="40" alt="" class="d-inline-block align-top" />
                        </h3>
                        <div className="score-row">
                            <h5 className="score-name top">Username</h5>
                            <h5 className="score-score top" >Score</h5>
                        </div>
                        {this.state.scores.slice(0, 10).map(newScore =>
                            <this.Score newScore={newScore} list={true} />
                        )}
                    </div>
                </div>
                <div className="myScores">
                    <div className="leader-box">
                        <h3>
                            <img className="logo" src={corona} width="40" height="40" alt="" class="d-inline-block align-top" />
                            My Scores
                            <img className="logo" src={corona} width="40" height="40" alt="" class="d-inline-block align-top" />
                        </h3>
                        {this.state.scores.filter(score => score.userName == (this.state.userName)).length !== 0 &&
                            <div className="score-row">
                                <h5 className="score-name top">Username</h5>
                                <h5 className="score-score top" >Score</h5>
                            </div>}

                        {this.state.scores.filter(score => score.userName == (this.state.userName)).length !== 0 ?
                            this.state.scores.filter(score => score.userName == (this.state.userName)).slice(0,10).map(score => (
                                <this.Score newScore={score} list={true} />
                            )) :
                            <div className="user-find">
                                <h2 className="user-find-label">No Scores Found!</h2>
                                <Form.Control className="user-find-input" type="text" placeholder="Enter a Username" value={this.state.tempName} onChange={(e) => this.setState({ tempName: e.target.value })} />
                                <Button variant="primary" onClick={this.findUser}>Find Scores</Button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Leaderboard