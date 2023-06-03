import React from 'react'
import './O_SearchBar.scss'

import { getPostTeasers } from './../../javascript/search-data.js'

import M_SearchForm from '../M_SearchForm/M_SearchForm.jsx'
import M_PostSuggestion from '../M_PostSuggestion/M_PostSuggestion.jsx'

// const addressPart = ':8080/'
const addressPart = '.adc.ac/'

export default class O_SearchBar extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = props

    this.state = {
      isSearchButtonDisabled: true,
      postTeasers: [],
      searchInputValue: searchInputValue
    }
  }

  componentDidMount() {
    // let postTeasers = []

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
    console.log('Input', searchInputValue)

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

  renderPostSuggestions = () => {
    const { postTeasers } = this.state
    const searchInputValue = this.state.searchInputValue.toLowerCase()
    const posts = []

    postTeasers.forEach((postTeaser) => {
      const nbspRegex = /[\u202F\u00A0]/gm
      const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm

      const title = postTeaser.title
        .replaceAll(nbspRegex, ' ')
        .replaceAll(punctuationRegex, '')
        .toLowerCase()

      if (title.includes(searchInputValue)) {
        const { title, link, id } = postTeaser

        posts.push(<M_PostSuggestion title={title} link={link} key={id} />)
      }
    })

    return <div className="C_PostSuggestions">{posts}</div>
  }

  render() {
    const { searchInputValue, isSearchButtonDisabled } = this.state

    return (
      <div className="O_SearchBar">
        <M_SearchForm
          searchInputValue={searchInputValue}
          isSearchButtonDisabled={isSearchButtonDisabled}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </div>

      // {searchInputValue.length >= 3 &&
      //   !isSearchButtonDisabled &&
      //   this.renderPostSuggestions()}
    )
  }
}
