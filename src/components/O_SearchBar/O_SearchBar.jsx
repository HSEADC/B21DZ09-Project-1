import React from 'react'

import { getPostTeasers } from './../../javascript/search-data.js'

import M_SearchForm from '../M_SearchForm/M_SearchForm.jsx'

// const addressPart = ':8080/'
const addressPart = '.adc.ac/'

export default class O_SearchBar extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue, white } = props

    this.state = {
      isSearchButtonDisabled: true,
      postTeasers: [],
      searchInputValue: searchInputValue,
      white: white
    }
  }

  componentDidMount() {
    let postTeasers = []
    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data
      })
    })
  }

  getPathFromUrl = (url) => {
    return url.split(addressPart)[0]
  }

  handleSearchInput = (searchInputValue) => {
    let isSearchButtonDisabled = true

    if (searchInputValue.length >= 3) {
      isSearchButtonDisabled = false
    }

    this.setState({
      isSearchButtonDisabled,
      searchInputValue
    })
  }

  handleSearchSubmit = () => {
    const { searchInputValue } = this.state

    if (searchInputValue.length >= 3) {
      const url = this.getPathFromUrl(window.location.href)

      window.location.href =
        url + addressPart + 'search.html?request=' + searchInputValue
    }
  }

  render() {
    const { searchInputValue, isSearchButtonDisabled, white } = this.state

    return (
      <div className="O_SearchBar">
        <M_SearchForm
          searchInputValue={searchInputValue}
          isSearchButtonDisabled={isSearchButtonDisabled}
          white={white}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </div>
    )
  }
}
