import React, { Component } from 'react'

// material-ui dependencies
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Redux dependencies
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from '../modules/Home'

// Components
import Home from '../components/Home'

class HomeContainer extends Component {
  componentWillMount () {
    // Required by material-ui to handle touch / tap on mobile
    injectTapEventPlugin()
  }

  render () {
    const muiTheme = getMuiTheme({}, {
      userAgent: this.props.userAgent
    })

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Home {...this.props} />
      </MuiThemeProvider>
    )
  }

  componentDidMount () {
    // This simulate a client side API Call
    this.props.homeActions.loadApiData()
  }
}

const mapStateToProps = (state) => ({
  ...state.home
})

const mapActionsToProps = (dispatch) => ({
  homeActions: bindActionCreators(homeActions, dispatch)
})

export default connect(mapStateToProps, mapActionsToProps)(HomeContainer)
