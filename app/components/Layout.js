import React, { Component } from 'react'

// material components
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Previous from 'material-ui/svg-icons/action/check-circle'
import Future from 'material-ui/svg-icons/action/query-builder'

const Layout = (props) => (
  <div className="container">
    <AppBar
      title="Reunions passées"
      iconElementRight={<h1 className="title">Project Reports</h1>}
      iconStyleRight={{margin: 0}}
      onLeftIconButtonTouchTap={props.toggleDrawer}
    />
    <Drawer
      open={props.drawer}
      containerStyle={{
        height: 'calc(100% - 66px)',
        top: 66,
        background: 'transparent',
        boxShadow: 'none'
      }}
    >
      <MenuItem focusState="focused" primaryText="Reunions passées" leftIcon={<Previous />} />
      <MenuItem primaryText="Reunions à venir" leftIcon={<Future />} />
    </Drawer>
    {
      props.children
    }
  </div>
)

export default Layout
