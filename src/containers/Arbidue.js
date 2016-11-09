import React, {Component} from 'react'
import Quiz from '../components/Quiz'

class Arbidue extends Component {
  constructor(){
    super()
    this.state = {
      counter:0,
      operator: "+",
      correct: 0,
      numbers: this.getRandomNumbers(10)
    }
  }
  getRandomNumbers(range){
    return [Math.floor(Math.random() * range), Math.floor(Math.random() * range)]
  }
  submitAnswer(answer){
    let correct = this.checkAnswer(answer) ? this.state.correct + 1 : this.state.correct
    let counter = this.state.counter + 1
    this.updateGame(correct, counter)
  }
  updateGame(correct, counter){
    if(counter >= 10){
      var gameOver = true
    }
    this.setState({
      gameOver: gameOver,
      counter: counter,
      numbers: this.getRandomNumbers(10),
      correct: correct
    })

  }
  checkAnswer(answer){
    return this.state.numbers.reduce((a, b) => {return a + b}, 0) === answer
  }
  render(){
    console.log(this.state);
    return (
      <div>
        <Quiz
          numbers={this.state.numbers}
          operator={this.state.operator}
          submitAnswer={this.submitAnswer.bind(this)}/>
      </div>
    )
  }
}

export default Arbidue
