import './S_QuizBlock.scss'
import React from 'react'
import { getQuizCards } from '../../javascript/search-data.js'

import A_Counter from '../A_Counter/A_Counter.jsx'
import O_ProgressBar from '../O_ProgressBar/O_ProgressBar.jsx'
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

  handleClickClose = () => {
    const quizWrapper = document.querySelector('.W_QuizBlock')
    quizWrapper.classList.add('none')
  }

  render() {
    const { quizCards } = this.state
    const { places, mood, character } = quizCards

    const placesTags = []
    const moodTags = []
    const characterTags = []
    //
    // places.forEach((place, i) => {
    //   placesTags.push(
    //     <M_Tag type={survey} stroke={stroke} text={tag} key={i} />
    //   )
    // })
    //
    // mood.forEach((mood1, i) => {
    //   moodTags.push(<M_Tag type={survey} stroke={stroke} text={tag} key={i} />)
    // })
    //
    // character.forEach((character1, i) => {
    //   characterTags.push(
    //     <M_Tag type={survey} stroke={stroke} text={tag} key={i} />
    //   )
    // })

    return (
      <div className="S_QuizBlock">
        <div className="W_QuizTop">
          <A_Counter text={'1/3'} />
          <O_ProgressBar />
          <div className="A_Close" onClick={this.handleClickClose}>
            {' '}
          </div>
        </div>
        <A_QuizText text={'Куда вы хотите пойти?'} />
        <div className="W_TagBar">{placesTags}</div>
        <div className="W_QuizBottom">
          <A_ButtonBack />
          <M_ButtonSurvey type={'black'} text={'далее'} />
        </div>
      </div>
    )
  }
}
