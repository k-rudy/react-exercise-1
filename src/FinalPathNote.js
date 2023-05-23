import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const FinalPathNote = () => {
  const selectFinalPath = state => {
    return state.finalPath
  }

  const dispatch = useDispatch()
  const finalPath = useSelector(selectFinalPath)

  const dispatchRestarted = () => dispatch({ type: 'questions/restarted' })

  if (finalPath === null) {
    return <div />
  } else {
    return (
      <div>
        <button onClick={dispatchRestarted}>Restart</button>
        <h1>Final Path: {finalPath.join(' => ')}</h1>
      </div>
    )
  }
}

export default FinalPathNote
