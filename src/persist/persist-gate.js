import { Provider } from 'mobx-react'
import React from 'react'

export class PersistGate extends React.Component {
  state = {
    store: null,
  }

  componentDidMount() {
    const { creator } = this.props

    creator().then(store => {
      this.setState({ store })
    })
  }

  render() {
    const { store } = this.state
    const { children } = this.props

    if (!store) {
      return null
    }

    return <Provider store={store}>{children}</Provider>
  }
}
