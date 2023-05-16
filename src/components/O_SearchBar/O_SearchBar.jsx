import React from 'react'
import './O_SearchBar.scss'

import { getPostTeasers } from './../../javascript/search-data.js'

import M_SearchForm from '../M_SearchForm/M_SearchForm.jsx'

export default class O_SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      postTeasers: []
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

  handleSearchSubmit = (value) => {
    console.log('Submit', value)
  }

  render() {
    console.log('Post Teasers', this.state.postTeasers)

    const posts = []

    // this.state.postTeasers.forEach((teaser) => {
    //   posts.push(<div className="A_StyleName">{teaser.title} </div>)
    // })

    return (
      <div className="O_SearchBar">
        <M_SearchForm initSearch />
      </div>
    )
  }
}
