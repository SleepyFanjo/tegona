import React, { Component } from 'react'

// material-ui dependencies
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Redux dependencies
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from '../modules/Home'

// Components
import Home from '../components/Home'

class HomeContainer extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Home project={this.props.project} loading={this.props.loading} error={this.props.error} />
      </MuiThemeProvider>
    )
  }

  componentDidMount () {
    // Required by material-ui to handle touch / tap on mobile
    injectTapEventPlugin()

    // This simulate a client side API Call
    this.props.homeActions.loadApiData()
  }
}

const mapStateToProps = (state) => ({
  loading: state.home.loading,
  error: state.home.error,
  project: state.home.project
})

const mapActionsToProps = (dispatch) => ({
  homeActions: bindActionCreators(homeActions, dispatch)
})

export default connect(mapStateToProps, mapActionsToProps)(HomeContainer)
