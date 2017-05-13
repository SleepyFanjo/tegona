import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from '../../utils/moment'

// material components
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { List, ListItem } from 'material-ui/List'
import Provider from 'material-ui/svg-icons/social/person'
import Status from 'material-ui/svg-icons/action/announcement'
import Calendar from 'material-ui/svg-icons/action/perm-contact-calendar'
import Paper from 'material-ui/Paper'

// colors
import { redA400, greenA700, blue500 } from 'material-ui/styles/colors'

// constants
import * as appConst from '../../utils/constants'

// components
import Meetings from './Meetings'
import MeetingReport from './MeetingReport'

const dateFormat = 'YYYY-MM-DD HH:mm:ss.SSS'

export default class Project extends Component {
  static propTypes = {
    project: PropTypes.object,
    filter: PropTypes.string
  }

  filterAndOrder (meetings, filter) {
    if (!meetings || meetings.length <= 0) {
      return meetings
    }

    const filtered = meetings.filter((meeting) => {
      if (filter === appConst.FUTURE_MEETINGS) {
        return moment().isBefore(moment(meeting.date))
      }

      return moment().isAfter(meeting.date)
    })

    return filtered.sort((meeting1, meeting2) => {

      let score = 0
      if (moment(meeting1.date).isBefore(meeting2.date)) {
        score = 1
      } else if (moment(meeting1.date).isAfter(meeting2.date)) {
        score = -1
      }

      if (filter === appConst.FUTURE_MEETINGS) {
        score = -score
      }

      return score
    })
  }

  render () {
    const { project } = this.props

    const actions = [
      <FlatButton
        key={0}
        label="Close"
        primary
        onTouchTap={this.props.closeDialog}
      />
    ]

    const meetings = this.filterAndOrder(project.meetings, this.props.filter)

    return (
      <div className="project-content-wrapper">
        <h2 className="project-title">
          {project.name}
        </h2>
        <p className="project-description">
          {project.description}
        </p>
        {
          meetings && meetings.length
            ? <Meetings meetings={meetings} filter={this.props.filter} selectMeeting={this.props.selectMeeting} />
            : <Paper className="project-meeting-missing" zDepth={2}>Il n'y a pas de rapport disponible pour ce projet</Paper>
        }
        <MeetingReport meetings={project.meetings} meetingId={this.props.meetingId} close={this.props.unselectMeeting} />
        <Dialog
          title={project.name}
          actions={actions}
          open={this.props.dialog}
          onRequestClose={this.props.closeDialog}
        >
          <List>
            <ListItem primaryText={moment(project.date).format('dddd DD MMM YYYY')} leftIcon={<Calendar color={blue500} />}/>
            <ListItem primaryText={project.provider} leftIcon={<Provider/>}/>
            <ListItem primaryText={project.status} leftIcon={<Status color={project.status === appConst.ON_GOING_PROJ ? greenA700 : redA400 } />} />
          </List>
        </Dialog>
      </div>
    )
  }
}
