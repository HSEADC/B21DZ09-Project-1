import React from 'react'
import { getPostTeasers } from '../../javascript/search-data.js'
import { findRecommendation } from '../../javascript/recommendations-search.js'
import { sample } from '../../javascript/utilities.js'

import O_StyleCard from '../O_StyleCard/O_StyleCard.jsx'

export default class O_RecomendationsBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      postTeasers: [],
      pageTags: []
      // stroke: true
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

  getPathFromUrl = (url) => {
    return url.split('/')[3]
  }

  handleBackClick = () => {
    history.back()
  }

  renderRecommendations = () => {
    const { postTeasers } = this.state
    const { pageTags } = this.state
    const posts = []
    const url = window.location.href
    const pageSection = url.split('/').at(-2)
    const pageName = url
      .split('/')
      .at(-1)
      .replaceAll('-', ' ')
      .replaceAll('style', '')
      .replaceAll('.html', '')

    postTeasers.forEach((postTeaser) => {
      const {
        title,
        section,
        type,
        category,
        tags,
        image,
        link,
        id
        // stroke
      } = postTeaser

      let commonTags = []

      for (let i = 0; i < tags.length; i++) {
        if (pageTags.includes(tags[i])) {
          commonTags.push(tags[i])
        }
      }

      if (
        posts.length < 3 &&
        title.toLowerCase() != pageName &&
        pageSection == section
      ) {
        if (section == 'movies' || pageTags == tags || commonTags.length >= 3) {
          posts.push(
            <O_StyleCard
              stroke={true}
              title={title}
              image={image}
              tags={tags}
              link={link}
              key={id}
            />
          )
        }
      }
    })

    if (posts.length < 3 && postTeasers.length > 0) {
      const postTeaser = sample(postTeasers)

      if (postTeaser) {
        const {
          title,
          section,
          type,
          category,
          tags,
          image,
          link,
          id
          // stroke
        } = postTeaser

        posts.push(
          <O_StyleCard
            stroke={true}
            title={title}
            image={image}
            tags={tags}
            link={link}
            key={id}
          />
        )
      }
    }

    return posts
  }

  render() {
    return (
      <div className="O_RecomendationsBlock">
        <div className="A_RecomendationText">Вам может быть интересно:</div>
        <div className="W_StylesRail">
          {' '}
          <div className="C_Styles">{this.renderRecommendations()}</div>
        </div>

        <div onClick={this.handleBackClick} className="A_ButtonBack">
          назад
        </div>
      </div>
    )
  }
}
