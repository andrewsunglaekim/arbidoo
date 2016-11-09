import React, {Component} from 'react'
import Number from './Number'
import AnswerForm from './AnswerForm'

class Quiz extends Component {
  render(){
    return (
      <div>
        <Number number={5}/>
        <Number number={6}/>
        <AnswerForm />
      </div>
    )
  }
}

export default Quiz
