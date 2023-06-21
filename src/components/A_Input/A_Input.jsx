import React from 'react'
import './A_Input.scss'
import classnames from 'classnames'

export default class A_Input extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  handleInput = () => {
    const { handleInput } = this.props
    const { value } = this.input.current
    handleInput(value)
  }

  render() {
    const { placeholder, value, handleSubmit, white } = this.props

    const classes = classnames({
      A_Input: true,
      white: white
    })

    return (
      <>
        <input
          className={classes}
          placeholder={placeholder}
          ref={this.input}
          value={value}
          onInput={this.handleInput}
          onKeyDown={(e) => {
            e.key === 'Enter' && handleSubmit()
          }}
        />
      </>
    )
  }
}
