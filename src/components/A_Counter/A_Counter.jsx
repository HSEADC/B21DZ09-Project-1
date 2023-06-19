import React from 'react'

export default class A_Counter extends React.Component {
  render() {
    const { text } = this.props

    return <div className="A_Counter">{text}</div>
  }
}
