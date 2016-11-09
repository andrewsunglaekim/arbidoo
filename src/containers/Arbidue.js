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
    this.setState({
      counter: this.state.counter + 1,
      numbers: this.getRandomNumbers(10)
    })
    console.log(answer)
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
