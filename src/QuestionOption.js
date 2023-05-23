import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const QuestionOption = ({ option, questionId }) => {
  const { id, name, nextQuestionId } = option
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch({ type: 'questions/optionSelected',
               payload: { nextQuestionId: nextQuestionId, optionId: id } })
  }

  const selectChosenOptionIds = state => state.chosenOptionIds
  const chosenOptionIds = useSelector(selectChosenOptionIds)

  return (
    <li className="option">
      <label className="form-control">
        <input type="radio" name={ 'radio' + questionId } onChange={handleChange}
               checked={chosenOptionIds.includes(id)} />
        {name}
      </label>
    </li>
  )
}

export default QuestionOption
