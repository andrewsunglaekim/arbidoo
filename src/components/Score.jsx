import React, {Component} from 'react'

class Score extends Component {
	getHumanTime(time){
    let minutes = parseInt(time / 60, 10)
		let seconds = time % 60
		return minutes ? `${minutes} minute(s) and ${seconds} second(s)` : `${seconds} second(s)`
	}
  render (){
    let {username, score, time} = this.props.score
		time = this.getHumanTime(time)
		return (
      <div className='score'>
				<span>{username}</span>
  			<span>{score}</span>
				<span>{time}</span>
			</div>
		)
	}
}

export default Score
