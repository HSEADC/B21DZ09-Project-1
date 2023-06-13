import './S_QuizBlock.scss'
import React from 'react'
import { getQuizCards } from '../../javascript/quiz-data.js'

export default class S_QuizBlock extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = props

    this.state = {
      quizCards: [],
      searchInputValue: searchInputValue
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
    return <div className="S_QuizBlock"></div>
  }
}
