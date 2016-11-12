import React, {Component} from 'react'
import Score from './Score'

class LeaderBoard extends Component {
  constructor(props){
    super(props)
		this.state = {hideScore: "hidden"}
		console.log(props)
	}
	toggleScores(){
    let hideScore = this.state.hideScore ? "" : "hidden"
		console.log(hideScore)
		this.setState({
			hideScore: hideScore
		})
	}
	render(){
		let scoreClassName = `scores transitioning ${this.state.hideScore}`
		let scores = this.props.leaderBoard.map((score, i) => {
		  return (
    		<Score 
				  position={i+1}
				  score={score}
					key={score.id} />
			)
		})
    return (
			<div className={scoreClassName}>
		  	<h3 onClick={this.toggleScores.bind(this)}>The Leaderboard!</h3>
				<div className='leaders'>
			 	  {scores}
				</div>
			</div>
		)
	}
}

export default LeaderBoard
