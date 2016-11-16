import React, {Component} from 'react'
import {Link} from 'react-router'

class LevelSelect extends Component {
  constructor(props){
    super(props)
  }
  changeLevel(level){
    this.props.onSelectLevel(level)
  }
  render(){
    let levels = [10, 50, 100, 150, 200, 250, 300, 400, 500, 1000]
    let links = levels.map((level) => {
      return(<Link 
               to={`/arbidoo/${level}`}
               onClick={() => this.changeLevel(level)}
               key={level}>
                 {level}
              </Link>)
    })
    return(
      <div className={this.props.showLevelClass}>
        this is the level select
        {links}
      </div>
    )
  }
}

export default LevelSelect
