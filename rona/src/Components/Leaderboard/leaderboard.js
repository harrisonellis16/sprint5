import React from 'react';
import './leaderboard.css'

class Leaderboard extends React.Component {

state = {
        scores: [],
        searchID: "",
        lastScore: null,
        newScore: "",
        userName: ""
   }

   componentDidMount () {
    
    fetch('http://whack-a-rona.herokuapp.com/Leaderboard/score')
    .then(res => res.json())
    .then((data) => {
        this.setState({scores: data})
        console.log(data)
    })
    .catch(console.log('We have an error'))
}
    Score = ({newScore, list}) => {
    return (
        <div>
         <h5>ID: {newScore.id}</h5>
         <h5>Username: {newScore.userName}</h5>
        <h5>Score: {newScore.score}</h5>
    </div>
    )}

    render() {
        return (
            <div className="body"> 
                <div className="globalScores">
                        <h3> Leaderboard </h3>
                        {this.state.scores.map(newScore => 
                            <this.Score newScore={newScore} list={true}/>
                        )}
                </div>
                <div className="myScores">  

                </div>
            </div>
        )
    }
}

export default Leaderboard