import React from 'react'
import './A_ProgressLine.scss'
import classnames from 'classnames'

export default class A_ProgressLine extends React.Component {
  render() {
    const { type } = this.props

    const classes = classnames({
      A_CircleStage: true,
      [`${type}`]: true
    })

    return <div className="A_ProgressLine"></div>
  }
}
