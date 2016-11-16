import React, {Component} from 'react'
import {Link} from 'react-router'

class LevelSelect extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let levels = [10, 50, 100, 150, 200, 250, 300, 400, 500, 1000]
    let links = levels.map((level) => {
      return(<Link></Link>)
    })
    return(
      <div className={this.props.showLevelClass}>
        this is the level select
      </div>
    )
  }
}

export default LevelSelect
