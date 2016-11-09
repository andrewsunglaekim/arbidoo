import React, {Component} from 'react'
import Number from './Number'
import AnswerForm from './AnswerForm'

class Quiz extends Component {
  render(){
    return (
      <div>
        <Number number={5}/>
        <div id="operator">+</div>
        <Number number={6}/>
        <AnswerForm
          submitAnswer={this.props.submitAnswer}
          />
      </div>
    )
  }
}

export default Quiz
