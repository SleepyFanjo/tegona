import createReducer from '../utils/createReducer'

// consts
import * as appConst from '../utils/constants'

const API_DATA_LOADING = 'home/API_DATA_LOADING'
const API_DATA_SUCCESS = 'home/API_DATA_SUCCESS'
const API_DATA_ERROR = 'home/API_DATA_ERROR'
const TOGGLE_DRAWER = 'home/TOGGLE_DRAWER'
const FILTER_MEETINGS = 'home/FILTER_MEETINGS'
const TOGGLE_DIALOG = 'home/TOGGLE_DIALOG'
const SELECT_MEETING = 'home/SELECT_MEETING'
const UNSELECT_MEETING = 'home/UNSELECT_MEETING'

const defaultState = {
  meetingId: null,
  dialog: false,
  filter: appConst.PAST_MEETINGS,
  drawer: typeof window === 'object' && window.innerWidth > 900,
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
  [TOGGLE_DIALOG]: (state) => {
    return Object.assign({}, state, {
      dialog: !state.dialog
    })
  },
  [TOGGLE_DRAWER]: (state) => {
    return Object.assign({}, state, {
      drawer: !state.drawer
    })
  },
  [FILTER_MEETINGS]: (state, action) => {
    return Object.assign({}, state, {
      filter: action.filter
    })
  },
  [SELECT_MEETING]: (state, action) => {
    return Object.assign({}, state, {
      meetingId: action.meeting
    })
  },
  [UNSELECT_MEETING]: (state) => {
    return Object.assign({}, state, {
      meetingId: null
    })
  }
})

export function selectMeeting (meeting) {
  return (dispatch) => {
    dispatch({
      type: SELECT_MEETING,
      meeting
    })
  }
}

export function unselectMeeting () {
  return (dispatch) => {
    dispatch({
      type: UNSELECT_MEETING
    })
  }
}

export function toggleDrawer () {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_DRAWER
    })
  }
}

export function toggleDialog () {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_DIALOG
    })
  }
}

export function updateFilter (filter) {
  return (dispatch) => {
    dispatch({
      type: FILTER_MEETINGS,
      filter
    })
  }
}

export function loadApiData (data) {
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
