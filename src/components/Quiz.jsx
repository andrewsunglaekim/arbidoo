import React, {Component} from 'react'
import Number from './Number'
import AnswerForm from './AnswerForm'
import Timer from '../components/Timer'

class Quiz extends Component {
	constructor(props){
    super(props)
		this.state = {transitionClass: ""}
	}
	submitQuizQuestion(ans){
    this.props.submitAnswer(ans)
		this.triggerSlide()
	}
	triggerSlide(){
   this.slideOff(this.slideEnter)  
	}
	slideOff(callback){
    this.setState({
      transitionClass: "transitioning off-screen-left"
		}, callback)
	}
	slideEnter(){
    setTimeout(()=> {
			this.setState({
        transitionClass: "off-screen-right"
			}, this.slideIn())
		}, 300)
	}
	slideIn(){
    setTimeout(() => {
		  this.setState({ transitionClass: "transitioning"})
		},100)
	}
  render(){
		let className = `quiz-container ${this.state.transitionClass}`
    return (
      <div className={className}>
        <Timer time={this.props.time}/>
        <Number number={this.props.numbers[0]}/>
        <div className="operator">{this.props.operator}</div>
        <Number number={this.props.numbers[1]}/>
        <div className="operator">=</div>
        <AnswerForm
          submitAnswer={this.submitQuizQuestion.bind(this)}
          />
      </div>
    )
  }
}

export default Quiz
