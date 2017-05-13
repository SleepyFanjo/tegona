import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from '../../utils/moment'

// material components
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import { GridList, GridTile } from 'material-ui/GridList'
import RaisedButton from 'material-ui/RaisedButton'
import Person from 'material-ui/svg-icons/social/person'
import { cyan500 } from 'material-ui/styles/colors'

// constants
import * as appConst from '../../utils/constants'

const MeetingCard = (props) => {
  const primaryInfo = props.card.report.find((info) => info.type === 'primary')

  return (
    <Card>
      <CardHeader
        title={moment(props.card.date).format('D MMM YYYY, H:mm')}
        subtitle={Meetings.renderLocationString(props.card.location)}
      />
      <CardText>
        {primaryInfo.content}
      </CardText>
      <List>
        {
          props.card.members.map((member, index) => (
            <ListItem
              disabled
              key={index}
              leftIcon={<Person color={cyan500}/>}
              primaryText={member.firstName + ' ' + member.lastName}
              secondaryText={member.email}
            />
          ))
        }
      </List>
      <CardActions>
        <RaisedButton label="Plus d'infos" secondary onTouchTap={() => props.selectMeeting(props.card.id)}/>
      </CardActions>
    </Card>
  )
}

export default class Meetings extends Component {
  static propTypes = {
    meetings: PropTypes.array,
    filter: PropTypes.string
  }

  state = {
    cols: 1
  }

  constructor (props) {
    super(props)

    this.computeCols = this.computeCols.bind(this)
  }

  computeCols () {
    const cols = typeof window === 'object' && window.matchMedia('(min-width: 600px)').matches ? 2 : 1

    this.setState({
      cols
    })
  }

  static renderLocationString (location) {
    return `${location.address}, ${location.postcode} ${location.city}, ${location.country}`
  }

  render () {
    const primary = this.props.meetings[0]
    const others = this.props.meetings.slice(1)
    const wording = this.props.filter === appConst.FUTURE_MEETINGS
      ? {primary: 'Prochaine réunion', secondary: 'Réunions suivantes'}
      : {primary: 'Dernière réunion', secondary: 'Réunions précédentes'}


    return (
      <div className="project-meetings">
        <h3 className="project-meeting-category-title">{wording.primary}</h3>
        <MeetingCard card={primary} selectMeeting={this.props.selectMeeting} />
        <h3 className="project-meeting-category-title">{wording.secondary}</h3>
        <GridList
          cols={this.state.cols}
          cellHeight="auto"
          padding={2}
        >
          {
            others.map((meeting, index) => {
              let size = 1

              if (index === 0 && others.length % 2 === 1) {
                size = this.state.cols
              }

              return (
                <GridTile
                  key={index}
                  cols={size}
                  rows={size}
                >
                  <MeetingCard card={meeting} selectMeeting={this.props.selectMeeting} />
                </GridTile>
              )
            })
          }
        </GridList>
      </div>
    )
  }

  componentDidMount () {
    this.computeCols()

    window.addEventListener('resize', this.computeCols)
  }
}
