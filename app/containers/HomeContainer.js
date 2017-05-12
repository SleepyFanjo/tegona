import React, { Component } from 'react'

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
      <Home message={this.props.message} actions={this.props.homeActions} />
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.home.hello
})

const mapActionsToProps = (dispatch) => ({
  homeActions: bindActionCreators(homeActions, dispatch)
})

export default connect(mapStateToProps, mapActionsToProps)(HomeContainer)
