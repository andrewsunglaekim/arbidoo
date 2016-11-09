import React, {Component} from 'react'

class AnswerForm extends Component {
  constructor(){
    super()
    this.state = {
      answer: ''
    }
  }
  onChange(e){
    this.setState({
      answer: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault()
    let answer = this.state.answer
    this.props.submitAnswer(answer)
    this.setState({
      answer: ''
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            placeholder='Answer Here'
            type='text'
            value={this.state.answer || ''} />
        </form>
      </div>
    )
  }
}

export default AnswerForm
