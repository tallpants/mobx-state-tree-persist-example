import { onSnapshot } from 'mobx-state-tree'
import * as storage from './storage'
const ROOT_STATE_STORAGE_KEY = '__mst_persist_key'

export function createStoreWithPersist(storeModel, defaultState) {
  return async () => {
    let store
    let snapshot

    try {
      snapshot = (await storage.load(ROOT_STATE_STORAGE_KEY)) || null
      store = storeModel.create(snapshot)
    } catch (_) {
      store = storeModel.create(defaultState)
    }

    onSnapshot(store, snapshot => storage.save(ROOT_STATE_STORAGE_KEY, snapshot))

    return store
  }
}
