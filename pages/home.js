import React from 'react'
import HomeContainer from '../app/containers/HomeContainer'

// styles
import '../styles/main.scss'

export default class SimplePage {
  getElements () {
    return <HomeContainer />
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
