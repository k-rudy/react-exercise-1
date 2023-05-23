import React from 'react'
import QuestionOption from './QuestionOption'
import styles from './Question.module.css'

const Question = ({ question }) => {
  const { id, name, options } = question

  const renderedOptions = options.map(option => {
    return <QuestionOption key={option.id} option={option} questionId={question.id} />
  })

  return (
    <li className={styles.question}>
      <div>{name}</div>
      <ul className={styles.optionsGroup}>
        {renderedOptions}
      </ul>
    </li>
  )
}

export default Question
