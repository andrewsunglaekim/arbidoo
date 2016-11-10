import React, {Component} from 'react'
import Score from './Score'

class LeaderBoard extends Component {
  constructor(props){
    super(props)
		console.log(props)
	}
	render(){
		let scores = this.props.leaderBoard.map((score) => {
		  return (
				<Score 
				  score={score}
					key={score.id} />
			)
		})
    return (
      <div>
			  The Leaderboard!	
				{scores}
			</div>
		)
	}
}

export default LeaderBoard
