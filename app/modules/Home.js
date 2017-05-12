import createReducer from '../utils/createReducer'

const EMPTY_ACTION = 'home/EMPTY_ACTION'

const defaultState = {
  hello: null
}

export default createReducer(defaultState, {
  [EMPTY_ACTION]: (state) => {
    return Object.assign({}, state, {
      hello: 'Hello'
    })
  }
})

export function doNothing () {
  return (dispatch, getState) => {
    dispatch({
      type: EMPTY_ACTION
    })
  }
}
