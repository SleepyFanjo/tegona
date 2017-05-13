import createReducer from '../utils/createReducer'

// fake api data
import data from '../../api/data.json'

const API_DATA_LOADING = 'home/API_DATA_LOADING'
const API_DATA_SUCCESS = 'home/API_DATA_SUCCESS'
const API_DATA_ERROR = 'home/API_DATA_ERROR'

const defaultState = {
  project: null,
  loading: false,
  error: null
}

export default createReducer(defaultState, {
  [API_DATA_LOADING]: (state) => {
    return Object.assign({}, state, {
      project: null,
      error: null,
      loading: true
    })
  },
  [API_DATA_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      project: action.data,
      loading: false
    })
  },
  [API_DATA_ERROR]: (state, action) => {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
})

export function loadApiData () {
  return (dispatch) => {
    dispatch({
      type: API_DATA_LOADING
    })

    const p1 = new Promise(
      (res, rej) => {
        setTimeout(() => {
          res(data)
        }, 1000)
      }
    )

    return p1.then((data) => {
      dispatch({
        type: API_DATA_SUCCESS,
        data
      })
    })
    .catch((error) => {
      dispatch({
        type: API_DATA_ERROR,
        error: error.message
      })
    })
  }
}
