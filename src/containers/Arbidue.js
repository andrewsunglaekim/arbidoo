import React, {Component} from 'react'
import Quiz from '../components/Quiz'
import HighScoreForm from '../components/HighScoreForm'
import Timer from '../components/Timer'
import {Link} from 'react-router'
import {browserHistory} from 'react-router'


class Arbidue extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter:0,
      operator: "+",
      correct: 0,
      numbers: this.getRandomNumbers(this.props.params.size),
      timerId: null,
      timer: 0
    }
    this.startTimer()
  }
  getRandomNumbers(range){
    return [Math.floor(Math.random() * range), Math.floor(Math.random() * range)]
  }
  startTimer(){
    let timerId = setInterval(()=>{
      let timer = this.state.timer + 1
      this.setState({
        timer: timer,
        timerId: timerId
      })
    }, 1000)
  }
  submitAnswer(answer){
    let correct = this.checkAnswer(answer) ? this.state.correct + 1 : this.state.correct
    let counter = this.state.counter + 1
    this.updateGame(correct, counter)
    console.log(this.state);
  }
  updateGame(correct, counter){
    let timerId = this.state.timerId
    let gameOver
    if(counter >= 3){
      gameOver = true
      clearInterval(this.state.timerId)
      timerId = null
    }
    this.setState({
      gameOver: gameOver,
      counter: counter,
      numbers: this.getRandomNumbers(10),
      correct: correct,
      timerId: timerId
    })

  }
  checkAnswer(answer){
    return this.state.numbers.reduce((a, b) => {return a + b}, 0) === answer
  }
  submitUser(username){
    // TODO: submit highscore to backend with name and time
    console.log(username);
    console.log(this.state)
    this.reset()
  }
  reset(size){
    this.setState({
      gameOver: false,
      counter: 0,
      correct: 0,
      numbers: this.getRandomNumbers(size),
      timer: 0
    })
    this.startTimer()
  }
  switchNums(){
    console.log(this.props.params);
    this.reset(this.props.params.size)
  }
  render(){
    let links = [10, 50, 100, 500, 1000].map((num) => {
      return(
        <Link key={num} onClick={this.switchNums.bind(this)} to={`/arbidue/${num}`}>{num}</Link>
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
