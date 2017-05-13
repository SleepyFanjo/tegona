import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Layout from './Layout'

// Material Components
import RefreshIndicator from 'material-ui/RefreshIndicator'

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
      <Layout drawer={this.props.drawer} toggleDrawer={this.props.homeActions.toggleDrawer}>
        {
          this.props.loading
            ? <div className="centered-indicator"><RefreshIndicator size={100} left={10} top={0} status="loading" /></div>
            : null
        }
      </Layout>
    )
  }
}
