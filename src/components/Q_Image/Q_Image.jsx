import classnames from 'classnames'
import React from 'react'

export default class Q_Image extends React.Component {
  render() {
    const { type, src } = this.props

    const classes = classnames({
      Q_Image: true,
      [`${type}`]: true
    })

    return (
      <div className={classes}>
        <img src={src} />
      </div>
    )
  }
}
