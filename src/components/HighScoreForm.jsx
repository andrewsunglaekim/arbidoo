import React, {Component} from 'react'

class HighScoreForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
			className: 'high-score-container hidden'
    }
  }
  onChange(e){
    this.setState({
      username: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault()
		if(this.state.username){
		  let username = this.state.username
   	  this.props.submitUser(username)
      this.setState({
        username: ''
      })
	  }
  }
	componentDidMount(){
			this.setState({
    		className: "high-score-container showing"
			})
	}
  render(){
    return(
      <div className={this.state.className}>
        Way to go {this.state.username}! You got {this.props.numCorrect} correct!
        <form onSubmit={e => this.onSubmit(e)}>
          <input
					  maxLength="5"
            onChange={e => this.onChange(e)}
            placeholder='Who are you? You magnificent beast'
            type='text'
            value={this.state.username || ''} />
        </form>
      </div>
    )
  }
}


export default HighScoreForm
