import './S_QuizBlock.scss'
import React from 'react'
import { getQuizCards } from '../../javascript/quiz-data.js'

import A_Counter from '../A_Counter/A_Counter.jsx'
import O_ProgressBar from '../O_ProgressBar/O_ProgressBar.jsx'
import A_Close from '../A_Close/A_Close.jsx'
import A_QuizText from '../A_QuizText/A_QuizText.jsx'
import W_TagBar from '../W_TagBar/W_TagBar.jsx'
import A_ButtonBack from '../A_ButtonBack/A_ButtonBack.jsx'
import M_ButtonSurvey from '../M_ButtonSurvey/M_ButtonSurvey.jsx'

export default class S_QuizBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quizCards: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount')

    getQuizCards().then((data) => {
      this.setState({
        quizCards: data
      })
    })
  }

  render() {
    return (
      <div className="S_QuizBlock">
        <div className="W_QuizTop">
          <A_Counter />
          <O_ProgressBar />
          <A_Close />
        </div>
        <A_QuizText />
        <W_TagBar />
        <div className="W_QuizBottom">
          <A_ButtonBack />
          <M_ButtonSurvey />
        </div>
      </div>
    )
  }
}
