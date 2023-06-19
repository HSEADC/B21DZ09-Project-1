import React from 'react'
import './A_CircleStage.scss'
import classnames from 'classnames'

export default class A_CircleStage extends React.Component {
  render() {
    const { stage, handleClick } = this.props

    const classes = classnames({
      A_CircleStage: true,
      stage: disabled,
      [`${type}`]: true
    })

    return <div className="A_CircleStage"></div>
  }
}
