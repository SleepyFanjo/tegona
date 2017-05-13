import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Layout from './Layout'
import Project from './Project'

// Material Components
import RefreshIndicator from 'material-ui/RefreshIndicator'
import Snackbar from 'material-ui/Snackbar'

export default class Home extends Component
{
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    project: PropTypes.object,
    drawer: PropTypes.bool,
    homeActions: PropTypes.object
  }

  render () {
    return (
      <Layout
        drawer={this.props.drawer}
        toggleDrawer={this.props.homeActions.toggleDrawer}
        filter={this.props.filter}
        updateFilter={this.props.homeActions.updateFilter}
        displayDetails={this.props.homeActions.toggleDialog}
      >
        {
          this.props.loading
            ? <div className="centered-indicator"><RefreshIndicator size={100} left={10} top={0} status="loading" /></div>
            : this.props.project
            ? <Project
              project={this.props.project}
              filter={this.props.filter}
              dialog={this.props.dialog}
              closeDialog={this.props.homeActions.toggleDialog}
              selectMeeting={this.props.homeActions.selectMeeting}
            />
            : <Snackbar open message="No reports available on this project" />
        }
      </Layout>
    )
  }
}
