import React from 'react'
import { getPostTeasers } from '../../javascript/search-data.js'
import { findRecommendation } from '../../javascript/recommendations-search.js'

import O_StyleCard from '../O_StyleCard/O_StyleCard.jsx'

export default class O_RecomendationsBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      postTeasers: [],
      pageTags: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount')

    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data
      })
    })

    this.setState({
      pageTags: findRecommendation()
    })
  }

  renderRecommendations = () => {
    const { postTeasers } = this.state
    const { pageTags } = this.state
    const posts = []

    console.log(pageTags)
    console.log(postTeasers)

    postTeasers.forEach((postTeaser) => {
      const nbspRegex = /[\u202F\u00A0]/gm
      const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm

      const { title, tags, image, link, id } = postTeaser

      if (pageTags == tags && posts.length < 3) {
        posts.push(
          <O_StyleCard
            title={title}
            image={image}
            tags={tags}
            link={link}
            key={id}
          />
        )
      } else if (pageTags.some((t) => tags.includes(t)) && posts.length < 3) {
        posts.push(
          <O_StyleCard
            title={title}
            image={image}
            tags={tags}
            link={link}
            key={id}
          />
        )
      }
    })

    return posts
  }

  render() {
    return (
      <div className="O_RecomendationsBlock">
        {' '}
        <div className="W_StylesRail">
          {' '}
          <div className="C_Styles">{this.renderRecommendations()}</div>
        </div>
      </div>
    )
  }
}
