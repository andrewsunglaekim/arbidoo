import React, {Component} from 'react'
import Quiz from '../components/Quiz'
import HighScoreForm from '../components/HighScoreForm'
import {Link} from 'react-router'
import Score from '../models/score'
import LeaderBoard from '../components/LeaderBoard'
import Header from '../components/Header'
import LevelSelect from '../components/LevelSelect'

class Arbidue extends Component {
  constructor(props){
    super(props)
    this.state = {
      operator: "+",
      numbers: [],
			timer: 0,
      showLevelClass: ""
    }
  }
	componentDidMount(){
    this.fetchData()
	}
	fetchData(num){
    Score.getHighScore(num || this.props.params.size).then((res) => {
			console.log(res)
			this.reset(num || this.props.params.size, res.data.leaderBoard)
		})
	}
  reset(size, leaderBoard){
    this.setState({
      gameOver: false,
      counter: 0,
      correct: 0,
			numbers: this.getRandomNumbers(size),
      timer: 0,
			leaderBoard: leaderBoard
    }, this.startTimer())
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
  }
  updateGame(correct, counter){
    let gameOver
    if(counter >= 5){
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
		if(this.state.correct > 0) {
			Score.addHighScore(data).then((res) =>{
				console.log(res)
   	   this.reset(this.props.params.size, res.data.leaderBoard)
   	 })
		} else {
   	   this.reset(this.props.params.size, this.state.leaderBoard)
		}
  }
  switchNums(num){
		this.stopTimer()
		this.fetchData(num)
  }
  selectLevel(level){
    this.fetchData(level)
  }
  onSendLevel(className){
    this.setState(
      {showLevelClass: className}
    )
  }
  render(){
    if(this.state.gameOver){
      return (
        <main>
          <HighScoreForm
            numCorrect={this.state.correct}
            submitUser={this.submitUser.bind(this)}/>
        </main>
      )
    } else {
      return (
        <div>
          <Header
            showLevelClass={this.state.showLevelClass}
            sendLevelClass={this.onSendLevel.bind(this)}/>
          <LevelSelect
            showLevelClass={this.state.showLevelClass}
            onSelectLevel={this.selectLevel.bind(this)}/>
          <main>
            <Quiz
              time={this.state.timer}
              numbers={this.state.numbers}
              operator={this.state.operator}
              submitAnswer={this.submitAnswer.bind(this)}/>
            <LeaderBoard leaderBoard={this.state.leaderBoard || []}/>
          </main>
        </div>
      )
    }
  }
}

export default Arbidue
