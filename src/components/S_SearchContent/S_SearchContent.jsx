import './S_SearchContent.scss'
import React from 'react'
import { getPostTeasers } from '../../javascript/search-data.js'

import O_StyleCard from '../O_StyleCard/O_StyleCard.jsx'

export default class S_SearchContent extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = props

    this.state = {
      postTeasers: [],
      searchInputValue: searchInputValue,
      stroke: false
    }
  }

  componentDidMount() {
    console.log('componentDidMount')

    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data
      })
    })
  }

  renderPostTeasers = () => {
    const { postTeasers, stroke } = this.state
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
        const { title, tags, image, link, id } = postTeaser

        posts.push(
          <O_StyleCard
            title={title}
            image={image}
            tags={tags}
            link={link}
            key={id}
            stroke={stroke}
          />
        )
      }
    })

    return posts
  }

  render() {
    return (
      <div className="S_SearchContent">
        {' '}
        <div className="W_StylesRail">
          {' '}
          <div className="C_Styles">{this.renderPostTeasers()}</div>
        </div>
      </div>
    )
  }
}
