import React from 'react'
import { RootElement } from 'react-server'
import { RootProvider } from 'react-server-redux'
import HomeContainer from '../app/containers/HomeContainer'
import store from '../app/stores/configureStore'

import data from '../api/data.json'

// styles
import '../styles/main.scss'

export default class Home {
  handleRoute (next) {
    this.userAgent = this.getRequest().getHttpHeader('user-agent')

    return next()
  }

  getElements () {
    return [
      <RootProvider store={store}>
        <RootElement>
          <HomeContainer projectData={data} userAgent={this.userAgent} />
        </RootElement>
      </RootProvider>
    ]
  }

  getMetaTags () {
    return [
      {charset: 'utf8'},
      {'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'title', content: 'Project Report'},
      {name: 'description', content: 'Project report website'},
      {name: 'generator', content: 'React Server'}
    ]
  }
}
