import './S_QuizBlock.scss'
import React from 'react'
import { getQuizCards } from '../../javascript/search-data.js'

import A_Counter from '../A_Counter/A_Counter.jsx'
import O_ProgressBar from '../O_ProgressBar/O_ProgressBar.jsx'
import A_Close from '../A_Close/A_Close.jsx'
import A_QuizText from '../A_QuizText/A_QuizText.jsx'
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
    const { quizCards } = this.state
    const tags = quizCards

    const tagElements = []

    tags.forEach((tag, i) => {
      tagElements.push(
        <M_Tag type={survey} stroke={stroke} text={tag} key={i} />
      )
    })

    return (
      <div className="S_QuizBlock">
        <div className="W_QuizTop">
          <A_Counter text={'1/3'} />
          <O_ProgressBar />
          <A_Close />
        </div>
        <A_QuizText text={'Куда вы хотите пойти?'} />
        <div className="W_TagBar">{tagElements}</div>
        <div className="W_QuizBottom">
          <A_ButtonBack />
          <M_ButtonSurvey type={'black'} text={'далее'} />
        </div>
      </div>
    )
  }
}
