const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true  
};

export default function tracks(state = initialState, action) {

  if (action.type === 'CHANGE_ALL') {
    return {
      ...state,
      history: action.payload.history,
      stepNumber: action.payload.stepNumber,
      xIsNext: action.payload.xIsNext
    };
  } else if (action.type === 'CHANGE_STEP') {
    return {
      ...state,
      stepNumber: action.payload
    };
  } else if (action.type === 'CHANGE_NEXT') {
    return {
      ...state,
      xIsNext: action.payload
    };
  }
  return state;
}