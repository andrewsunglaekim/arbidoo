import React, {Component} from 'react'
import Number from './Number'
import AnswerForm from './AnswerForm'

class Quiz extends Component {
  render(){
    return (
      <div>
        <Number number={this.props.numbers[0]}/>
        <div id="operator">{this.props.operator}</div>
        <Number number={this.props.numbers[1]}/>
        <AnswerForm
          submitAnswer={this.props.submitAnswer}
          />
      </div>
    )
  }
}

export default Quiz
