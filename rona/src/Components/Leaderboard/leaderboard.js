import React from 'react';
import './leaderboard.css'

class Leaderboard extends React.Component {

    state = {
        scores: [],
        searchID: "",
        lastScore: null,
        newScore: "",
        userName: this.props.match.params.id
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
                    <h3> Leaderboard </h3>
                    <div className="score-row">
                        <h5 className="score-name top">Username</h5>
                        <h5 className="score-score top" >Score</h5>
                    </div>
                    {this.state.scores.map(newScore =>
                        <this.Score newScore={newScore} list={true} />
                    )}
                </div>
                <div className="myScores">
                    <h3> My Scores </h3>
                    <div className="score-row">
                        <h5 className="score-name top">Username</h5>
                        <h5 className="score-score top" >Score</h5>
                    </div>

                    {this.state.scores.filter(score => score.userName == (this.state.userName)).map(score => (
                        <this.Score newScore={score} list={true} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Leaderboard