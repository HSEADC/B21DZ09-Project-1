import './O_ProgressBar.scss'
import React from 'react'

import A_CircleStage from '../A_CircleStage/A_CircleStage.jsx'

export default class O_ProgressBar extends React.Component {
  render() {
    return
    ;<div className="O_ProgressBar">
      <div className="Q_Line"> </div>
      <div className="W_SurveyStage">
        <p>Куда идем</p>
        <A_CircleStage />
      </div>
      <div className="W_SurveyStage">
        <p>Настроение</p>
        <A_CircleStage />
      </div>
      <div className="W_SurveyStage">
        <p>Характер</p>
        <A_CircleStage />
      </div>
      <div className="Q_FinishIcon"> </div>
    </div>
  }
}
