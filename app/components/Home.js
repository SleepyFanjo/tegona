import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material Components

export default class Home extends Component
{
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    project: PropTypes.object
  }

  render () {
    return (
      <div className="my-class">
        { this.props.message || '' }
        <RaisedButton
          label="Test Material Ui"
        />
      </div>
    )
  }

  componentDidMount () {
    this.props.actions.doNothing()
  }
}
