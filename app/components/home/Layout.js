import React, { Component } from 'react'

// material components
import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Previous from 'material-ui/svg-icons/action/check-circle'
import Future from 'material-ui/svg-icons/action/query-builder'
import Help from 'material-ui/svg-icons/action/help'

// constants
import * as appConst from '../../utils/constants'

const Layout = (props) => (
  <div className="container">
    <AppBar
      title={props.filter}
      iconElementRight={<h1 className="title">Project Reports</h1>}
      iconStyleRight={{margin: 0}}
      onLeftIconButtonTouchTap={props.toggleDrawer}
    />
    <Drawer
      open={props.drawer}
      containerClassName="drawer-container"
    >
      <MenuItem primaryText={appConst.PAST_MEETINGS} leftIcon={<Previous />} onTouchTap={() => props.updateFilter(appConst.PAST_MEETINGS)} />
      <MenuItem primaryText={appConst.FUTURE_MEETINGS} leftIcon={<Future />} onTouchTap={() => props.updateFilter(appConst.FUTURE_MEETINGS)} />
      <Divider />
      <MenuItem primaryText="Project Details" leftIcon={<Help />} onTouchTap={props.displayDetails} />
    </Drawer>
    {
      props.children
    }
  </div>
)

export default Layout
