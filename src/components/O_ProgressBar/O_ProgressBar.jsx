import './O_ProgressBar.scss'
import React from 'react'

import A_CircleStage from '../A_CircleStage/A_CircleStage.jsx'
import A_ProgressLine from '../A_ProgressLine/A_ProgressLine.jsx'
import A_FinishIcon from '../A_FinishIcon/A_FinishIcon.jsx'

export default class O_ProgressBar extends React.Component {
  render() {
    return (
      <div className="O_ProgressBar">
        <div className="Q_Line"> </div>
        <A_ProgressLine />
        <div className="W_SurveyStage">
          <p>Куда идем</p>
          <A_CircleStage type={'current'} />
        </div>
        <div className="W_SurveyStage">
          <p>Настроение</p>
          <A_CircleStage type={'disabled'} />
        </div>
        <div className="W_SurveyStage">
          <p>Характер</p>
          <A_CircleStage type={'disabled'} />
        </div>
        <A_FinishIcon type={'disabled'} />
      </div>
    )
  }
}
