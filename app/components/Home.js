import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default class Home extends Component
{
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
