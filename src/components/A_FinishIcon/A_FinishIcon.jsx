import React from 'react'
import './A_FinishIcon.scss'
import classnames from 'classnames'

export default class A_FinishIcon extends React.Component {
  render() {
    const { type } = this.props

    const classes = classnames({
      A_FinishIcon: true,
      [`${type}`]: true
    })

    return <div className={classes}></div>
  }
}
