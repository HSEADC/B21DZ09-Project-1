import React from 'react'

export default class M_ButtonSurvey extends React.Component {
  render() {
    const { text, type, handleClickNext } = this.props

    return (
      <div className="M_ButtonSurvey" onClick={handleClickNext}>
        {text}
      </div>
    )
  }
}
