import React, {Component} from 'react'
import Quiz from '../components/Quiz'
import HighScoreForm from '../components/HighScoreForm'
import Timer from '../components/Timer'
import {Link} from 'react-router'
import Score from '../models/score'

class Arbidue extends Component {
  constructor(props){
    super(props)
		Score.getHighScore(this.props.params.size).then((res) => console.log(res))
    this.state = {
      counter:0,
      operator: "+",
      correct: 0,
      numbers: this.getRandomNumbers(this.props.params.size),
      timer: 0
    }
    this.startTimer()
  }
  getRandomNumbers(range){
    return [Math.floor(Math.random() * range), Math.floor(Math.random() * range)]
  }
  startTimer(){
		if(!this.timerId){
			this.timerId = setInterval(()=>{
				let timer = this.state.timer + 1
				this.setState({
					timer: timer
				})
			}, 1000)
		}
  }
	stopTimer(){
  	clearInterval(this.timerId)		
		this.timerId = null
	}
  submitAnswer(answer){
    let correct = this.checkAnswer(answer) ? this.state.correct + 1 : this.state.correct
    let counter = this.state.counter + 1
    this.updateGame(correct, counter)
    console.log(this.state);
  }
  updateGame(correct, counter){
    let gameOver
    if(counter >= 3){
      gameOver = true
      this.stopTimer()
    }
    this.setState({
      gameOver: gameOver,
      counter: counter,
      numbers: this.getRandomNumbers(this.props.params.size),
      correct: correct
    })

  }
  checkAnswer(answer){
    return this.state.numbers.reduce((a, b) => {return a + b}, 0) === answer
  }
  submitUser(username){
		let data = {
      score: { 
				username: username,
				score: this.state.correct,
				maxNum: this.props.params.size,
				time: this.state.timer,
				operator: this.state.operator
      }
		}
		Score.addHighScore(data).then((res) =>{
			console.log(res)
    })
    this.reset(this.props.params.size)
  }
  reset(size){
    this.setState({
      gameOver: false,
      counter: 0,
      correct: 0,
      numbers: this.getRandomNumbers(size),
      timer: 0
    }, this.startTimer())
  }
  switchNums(num){
		this.stopTimer()
		this.reset(num)
  }
  render(){
    let links = [10, 50, 100, 500, 1000].map((num) => {
      return(
        <Link key={num} onClick={(e) => this.switchNums(num)} to={`/arbidue/${num}`}>{num}</Link>
      )
    })
    if(this.state.gameOver){
      return (
        <div key="bob">
          <HighScoreForm
            numCorrect={this.state.correct}
            submitUser={this.submitUser.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div key="bob">
          <Timer time={this.state.timer}/>
          <Quiz
            numbers={this.state.numbers}
            operator={this.state.operator}
            submitAnswer={this.submitAnswer.bind(this)}/>
          {links}
        </div>
      )
    }
  }
}

export default Arbidue
