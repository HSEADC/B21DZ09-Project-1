import React from 'react'
import './A_Close.scss'

export default class A_Close extends React.Component {
  render() {
    const { handleClickClose } = this.props

    return <div className="A_Close" onClick={handleClickClose}></div>
  }
}
