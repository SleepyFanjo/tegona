import injectTapEventPlugin from 'react-tap-event-plugin'

let alreadyCalled = false

const injectPlugin = () => {
  if (!alreadyCalled) {
    injectTapEventPlugin()

    alreadyCalled = true
  }
}

export default injectPlugin
