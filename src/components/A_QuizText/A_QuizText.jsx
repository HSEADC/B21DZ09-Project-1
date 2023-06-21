import React from 'react'
import './A_QuizText.scss'

export default class A_QuizText extends React.Component {
  render() {
    const { text } = this.props

    return <div className="A_QuizText">{text}</div>
  }
}
