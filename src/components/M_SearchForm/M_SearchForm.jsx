import React from 'react'
import './M_SearchForm.scss'

import A_Input from './../A_Input/A_Input.jsx'
import A_Button from './../A_Button/A_Button.jsx'

export default class M_SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleInput = (value) => {
    this.setState({
      value
    })
  }

  handleSearchSubmit = () => {
    const { value } = this.state
    const { handleSearchSubmit } = this.props
    handleSearchSubmit(value)
  }

  render() {
    const { value } = this.state
    const { handleSearchSubmit } = this.props

    return (
      <div className="M_SearchForm">
        <A_Input
          value={value}
          handleSubmit={this.handleSearchSubmit}
          handleInput={this.handleInput}
        />

        <A_Button handleClick={this.handleSearchSubmit} />
      </div>
    )
  }
}
