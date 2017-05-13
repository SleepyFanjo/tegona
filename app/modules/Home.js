import createReducer from '../utils/createReducer'

// fake api data
import data from '../../api/data.json'

const API_DATA_LOADING = 'home/API_DATA_LOADING'
const API_DATA_SUCCESS = 'home/API_DATA_SUCCESS'
const API_DATA_ERROR = 'home/API_DATA_ERROR'
const TOGGLE_DRAWER = 'home/TOGGLE_DRAWER'

const defaultState = {
  drawer: true,
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
  },
  [TOGGLE_DRAWER]: (state, action) => {
    return Object.assign({}, state, {
      drawer: !state.drawer
    })
  }
})

export function toggleDrawer () {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_DRAWER
    })
  }
}

export function loadApiData () {
  return (dispatch) => {
    dispatch({
      type: API_DATA_LOADING
    })

    const p1 = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(data)
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
