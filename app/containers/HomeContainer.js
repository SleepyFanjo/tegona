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

class HomeContainer extends Component
{
  render () {
    return (
      <MuiThemeProvider>
        <Home message={this.props.message} actions={this.props.homeActions} />
      </MuiThemeProvider>
    )
  }

  componentDidMount () {

    // Required by material-ui to handle touch / tap on mobile
    injectTapEventPlugin()
  }
}

const mapStateToProps = (state) => ({
  message: state.home.hello
})

const mapActionsToProps = (dispatch) => ({
  homeActions: bindActionCreators(homeActions, dispatch)
})

export default connect(mapStateToProps, mapActionsToProps)(HomeContainer)
