const initialState = {
  chosenQuestionIds: [1],
  chosenOptionIds: [],
  finalPath: null,
  questions: [
    { id: 1, name: 'Question 1',
      options: [
        { id: 1, name: 'Option one', nextQuestionId: 2 },
        { id: 2, name: 'Option two', nextQuestionId: 3 },
        { id: 3, name: 'Option three', nextQuestionId: 4 }
      ] },
    { id: 2, name: 'Question 2',
      options: [
        { id: 4, name: 'Option one', nextQuestionId: 5 },
        { id: 5, name: 'Option two', nextQuestionId: 6 }
      ] },
    { id: 3, name: 'Question 3',
      options: [
        { id: 6, name: 'Option one', nextQuestionId: null },
        { id: 7, name: 'Option two', nextQuestionId: null },
        { id: 8, name: 'Option three', nextQuestionId: null }
      ] },
    { id: 4, name: 'Question 4',
      options: [
        { id: 9, name: 'Option one', nextQuestionId: 7 },
        { id: 11, name: 'Option two', nextQuestionId: 8 },
        { id: 12, name: 'Option two', nextQuestionId: 9 }
      ] },
    { id: 5, name: 'Question 5',
      options: [
        { id: 13, name: 'Option one', nextQuestionId: null },
        { id: 14, name: 'Option two', nextQuestionId: null }
      ] },
    { id: 6, name: 'Question 6',
      options: [
        { id: 15, name: 'Option one', nextQuestionId: null },
        { id: 16, name: 'Option two', nextQuestionId: null }
      ] },
    { id: 7, name: 'Question 7',
      options: [
        { id: 17, name: 'Option one', nextQuestionId: null },
        { id: 18, name: 'Option two', nextQuestionId: null },
        { id: 19, name: 'Option three', nextQuestionId: null }
      ] },
    { id: 8, name: 'Question 8',
      options: [
        { id: 20, name: 'Option one', nextQuestionId: null },
        { id: 21, name: 'Option two', nextQuestionId: null }
      ] },
    { id: 9, name: 'Question 9',
      options: [
        { id: 22, name: 'Option one', nextQuestionId: null },
        { id: 23, name: 'Option two', nextQuestionId: null },
        { id: 24, name: 'Option three', nextQuestionId: null }
      ] }
  ]
}

const buildFinalPath = (state) => {
  return state.chosenQuestionIds.map(id => {
    return state.questions.find(question => question.id === id).name
  })
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'questions/optionSelected': {
      if (action.payload.nextQuestionId === null) {
        return {
          ...state,
          chosenOptionIds: [...state.chosenOptionIds, action.payload.optionId],
          finalPath: buildFinalPath(state)
        }
      }

      return {
        ...state,
        chosenOptionIds: [...state.chosenOptionIds, action.payload.optionId],
        chosenQuestionIds: [...state.chosenQuestionIds, action.payload.nextQuestionId],
      }
    }

    case 'questions/restarted': {
      return initialState
    }

    default:
      return state
  }
}
