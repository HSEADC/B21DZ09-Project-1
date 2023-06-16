import classnames from 'classnames'
import React from 'react'

export default class M_Tag extends React.Component {
  render() {
    const { text, type, stroke } = this.props

    const classes = classnames({
      M_Tag: true,
      stroke: stroke,
      [`${type}`]: true
    })

    return <div className={classes}>{text}</div>
  }
}
