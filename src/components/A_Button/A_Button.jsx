import React from 'react'
import './A_Button.scss'

export default class A_Button extends React.Component {
  render() {
    const { handleClick } = this.props
    return <div className="A_Button" onClick={handleClick}></div>
  }
}
