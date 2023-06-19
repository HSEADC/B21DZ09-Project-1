import React from 'react'
import classnames from 'classnames'

export default class M_ButtonSurvey extends React.Component {
  render() {
    const { type, text, handleClickNext } = this.props

    const classes = classnames({
      M_ButtonSurvey: true,
      [`${type}`]: true
    })

    return (
      <div className={classes} onClick={handleClickNext}>
        {text}
        <div className="Q_Arrow black"> </div>
      </div>
    )
  }
}
