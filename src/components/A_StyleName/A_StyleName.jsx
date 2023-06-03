import React from 'react'

export default class A_StyleName extends React.Component {
  render() {
    const { text } = this.props

    return <div className="A_StyleName">{text}</div>
  }
}
