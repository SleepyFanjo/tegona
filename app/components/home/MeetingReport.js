import React, { Component } from 'react'

// material components
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import { cyan500, pinkA200 } from 'material-ui/styles/colors'

const getReportItem = (info, key, inset) => {
  let props = {
    primaryText: info.content,
    initiallyOpen: true,
    key: key,
    disabled: true,
    insetChildren: inset,
    secondaryText: info.type
  }

  switch (info.type) {
    case 'question':
      props.style = {
        color: pinkA200
      }
      break
    case 'decision':
      props.style = {
        color: cyan500
      }
      break
  }

  if (info.children && info.children.length >= 0) {
    props.nestedItems = info.children.map((children, index) => getReportItem(children, key + '-' + index, true))
  }

  return <ListItem {...props} />
}

const Report = (props) => {
  const report = props.meeting.report

  if (!report || report.length <= 0) {
    return <span>There is no reports available for this meeting yet</span>
  }

  return (
    <List>
      <Subheader>Report List</Subheader>
      {
        report.map((info, key) => (
          getReportItem(info, key, false)
        ))
      }
    </List>
  )
}

export default class MeetingReport extends Component {
  render () {
    const actions = [
      <FlatButton
        key={0}
        label="Close"
        primary
        onTouchTap={this.props.close}
      />
    ]

    const meeting = this.props.meetingId !== null
      ? this.props.meetings.find((item) => item.id === this.props.meetingId)
      : null

    return (
      <Dialog
        title="Report"
        actions={actions}
        open={this.props.meetingId !== null}
        onRequestClose={this.props.close}
        autoScrollBodyContent
      >
        {
          meeting
            ? <Report meeting={meeting} />
            : null
        }
      </Dialog>
    )
  }
}
