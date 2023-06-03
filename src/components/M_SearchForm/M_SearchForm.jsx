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

  renderResetButton = () => {
    const { handleSearchInput } = this.props

    return (
      <A_Button
        text="X"
        type="resetField"
        disabled={false}
        handleClick={() => handleSearchInput('')}
      />
    )
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
    const {
      searchInputValue,
      isSearchButtonDisabled,
      handleSearchInput,
      handleSearchSubmit
    } = this.props

    return (
      <div className="M_SearchForm">
        <A_Input
          value={searchInputValue}
          placeholder="Что ищем?"
          handleInput={handleSearchInput}
          handleSubmit={handleSearchSubmit}
        />

        {searchInputValue != '' && this.renderResetButton()}

        <A_Button
          type="primary"
          disabled={isSearchButtonDisabled}
          handleClick={handleSearchSubmit}
        />
      </div>
    )
  }
}
