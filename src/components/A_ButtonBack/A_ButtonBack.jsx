import React from 'react'

export default class A_ButtonBack extends React.Component {
  render() {
    const { handleClickBack } = this.props

    return (
      <div className="A_ButtonBack" onClick={handleClickBack}>
        назад
      </div>
    )
  }
}
