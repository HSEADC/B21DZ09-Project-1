import classnames from 'classnames'
import React from 'react'
import './M_SurveyTag.scss'

export default class M_SurveyTag extends React.Component {
  render() {
    const { text, id } = this.props

    const classes = classnames({
      M_SurveyTag: true
    })

    return (
      <div className={classes} id={id}>
        {text}
      </div>
    )
  }
}
