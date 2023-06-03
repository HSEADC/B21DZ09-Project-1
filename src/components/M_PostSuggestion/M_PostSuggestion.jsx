import './M_PostSuggestion.scss'
import React from 'react'

import A_Text from '../A_Text/A_Text.jsx'

export default class M_PostSuggestion extends React.Component {
  render() {
    const { title, link } = this.props

    return (
      <a className="M_PostSuggestion" href={link}>
        <A_Text text={title} type="h3" />
      </a>
    )
  }
}
