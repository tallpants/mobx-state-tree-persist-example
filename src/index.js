import { observer } from 'mobx-react'
import { types } from 'mobx-state-tree'
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { createStoreWithPersist, injectStore, PersistGate } from './persist'

export const RootStore = types
  .model({
    someNumber: types.number,
  })
  .actions(self => ({
    increment() {
      self.someNumber += 1
    },
    clear() {
      self.someNumber = 0
    },
  }))

const defaultState = {
  someNumber: 0,
}

const DisplayStoreComponent = injectStore(
  observer(({ store }) => (
    <code>
      <pre>{JSON.stringify(store, null, 2)}</pre>
    </code>
  )),
)

const IncrementButton = injectStore(({ store }) => (
  <button onClick={store.increment}>Increment</button>
))
const ClearButton = injectStore(({ store }) => <button onClick={store.clear}>Clear</button>)

const App = () => (
  <Fragment>
    <DisplayStoreComponent />
    <IncrementButton />
    <ClearButton />
  </Fragment>
)

const AppWithPersist = () => (
  <PersistGate creator={createStoreWithPersist(RootStore, defaultState)}>
    <App />
  </PersistGate>
)

render(<AppWithPersist />, document.getElementById('root'))
