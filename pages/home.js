import React from 'react'
import { RootElement } from 'react-server'
import { RootProvider } from 'react-server-redux'
import HomeContainer from '../app/containers/HomeContainer'
import store from '../app/stores/configureStore'

// styles
import '../styles/main.scss'

export default class Home {
  getElements () {
    return [
      <RootProvider store={store}>
        <RootElement key={0}>
          <HomeContainer />
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
