import React from 'react'
import Q_Image from '../Q_Image/Q_Image.jsx'
import M_Tag from '../M_Tag/M_Tag.jsx'
import A_StyleName from '../A_StyleName/A_StyleName.jsx'

export default class O_StyleCard extends React.Component {
  render() {
    const { title, tags, image, link, stroke } = this.props

    const tagElements = []

    tags.forEach((tag, i) => {
      tagElements.push(<M_Tag stroke={stroke} text={tag} key={i} />)
    })

    return (
      <a className="O_StyleCard" href={link}>
        <div className="A_CardImage">
          <Q_Image type="postTeaser" src={image} />{' '}
        </div>
        <A_StyleName text={title} />
        <div className="W_TagBar">{tagElements}</div>
      </a>
    )
  }
}
