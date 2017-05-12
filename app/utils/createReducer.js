export default function createReducer (initialState, handlers) {
  return (state = initialState, action = {}) => {
    if ('type' in action) {
      return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
    }

    return state
  }
}
