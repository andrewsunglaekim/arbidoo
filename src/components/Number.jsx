import React, {Component} from 'react'

class Number extends Component {
  render(){
    return (
      <div className='number'>
        {this.props.number}
      </div>
    )
  }
}

export default Number
