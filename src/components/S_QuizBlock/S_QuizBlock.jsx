import './S_QuizBlock.scss'
import React from 'react'
import { getQuizCards } from '../../javascript/search-data.js'

import A_Counter from '../A_Counter/A_Counter.jsx'
import O_ProgressBar from '../O_ProgressBar/O_ProgressBar.jsx'
import A_QuizText from '../A_QuizText/A_QuizText.jsx'
import A_ButtonBack from '../A_ButtonBack/A_ButtonBack.jsx'
import M_ButtonSurvey from '../M_ButtonSurvey/M_ButtonSurvey.jsx'
import M_SurveyTag from '../M_SurveyTag/M_SurveyTag.jsx'

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

  renderPlacesTags = () => {
    function handleClickActive() {
      console.log('click')
      this.classList.toggle('active')
    }

    const placesTags = [
      'работа',
      'учеба',
      'конференция',
      'выставка',
      'бар',
      'парк',
      'кино',
      'ресторан',
      'праздник',
      'кофейня',
      'прогулка'
    ]
    const render = []

    placesTags.forEach((placesTag, i) => {
      render.push(
        <M_SurveyTag
          text={placesTag}
          key={i}
          id={'place'}
          onClick={this.handleClickActive}
        />
      )
    })

    return render
  }

  render() {
    return (
      <div className="S_QuizBlock">
        {' '}
        <div className="W_QuizTop">
          <A_Counter text={'1/3'} />
          <O_ProgressBar />
          <div className="A_Close" onClick={this.handleClickClose}>
            {' '}
          </div>
        </div>
        <A_QuizText text={'Куда вы хотите пойти?'} />
        <div className="W_TagBar">{this.renderPlacesTags()}</div>
        <div className="W_QuizBottom">
          <A_ButtonBack />
          <M_ButtonSurvey type={'black'} text={'далее'} />
        </div>
      </div>
    )
  }
}
