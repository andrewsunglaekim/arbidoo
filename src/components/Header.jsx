import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component{
  constructor(props){
    super()
    this.state = {
      showLevels: "levels hidden"
    }
  }
  openLevelMenu(e){
    let showLevelClass = this.props.showLevelClass == "levels" ? "levels hidden" : "levels"
    this.props.sendLevelClass(showLevelClass)
  }
  render(){
    return (
      <header>
        <span onClick={(e) => this.openLevelMenu(e)}>Difficulty</span>
        <h1><Link to={'/arbidoo/100'}>ARBIDOO</Link></h1>
        <span>Leaderboard</span>
      </header>
    )
  }
}

export default Header
