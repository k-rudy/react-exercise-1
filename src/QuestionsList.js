import React from 'react'
import Question from './Question'
import { useSelector } from 'react-redux'
import styles from './QuestionList.module.css'

const QuestionsList = () => {
  const selectChosenQuestions = (state) => {
    return state.questions.filter(question => state.chosenQuestionIds.includes(question.id))
  }
  const chosenQuestions = useSelector(selectChosenQuestions)
  
  const renderedQuestions = chosenQuestions.map((question) => {
    return <Question key={question.id} question={question} />
  })

  return <ul className={styles.questions}>{renderedQuestions}</ul>
}

export default QuestionsList
