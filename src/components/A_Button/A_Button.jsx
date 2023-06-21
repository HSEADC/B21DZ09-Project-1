import React from 'react'
import './A_Button.scss'
import classnames from 'classnames'

export default class A_Button extends React.Component {
  render() {
    const { text, type, disabled, handleClick, white } = this.props

    const classes = classnames({
      A_Button: true,
      white: white,
      disabled: disabled
    })

    return (
      <div className={classes} onClick={handleClick}>
        {text}
      </div>
    )
  }
}
