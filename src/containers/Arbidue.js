import React, {Component} from 'react'
import Quiz from '../components/Quiz'

class Arbidue extends Component {
  constructor(){
    super()
    this.state = {}
  }
  submitAnswer(answer){
    console.log(answer)
  }
  render(){
    return (
      <div>
        <Quiz
          submitAnswer={this.submitAnswer.bind(this)}/>
      </div>
    )
  }
}

export default Arbidue
