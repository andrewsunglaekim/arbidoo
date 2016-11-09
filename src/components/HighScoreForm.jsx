import React, {Component} from 'react'

class HighScoreForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: ''
    }
  }
  onChange(e){
    this.setState({
      username: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault()
    let username = this.state.username
    this.props.submitUser(username)
    this.setState({
      username: ''
    })
  }
  render(){
    return(
      <div>
        Way to go {this.state.username}! You got {this.props.numCorrect} correct!
        <form onSubmit={e => this.onSubmit(e)}>
          <input
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
