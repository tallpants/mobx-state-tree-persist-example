# README

Steps to run:

- Clone the repo `git clone git@github.com:tallpants/mobx-state-tree-persist-example`
- CD into the directory `cd mobx-state-tree-persist-example`
- Install dependencies (`yarn` or `npm install`)
- Run (`yarn start` or `npm run start`)

## TODO:

- Adapt for multiple stores.

  - Maybe with store map for `PersistGate` ex:

  ```js
  <PersistGate
    storeCreators={{
      firstStoreName: createStoreWithPersist(firstStoreModel, firstStoreDefaultState),
      secondStoreName: createStoreWithPersist(secondStoreModel, secondStoreDefaultState),
    }}
  />
  ```

  - `injectStore(storeName)` injects the store with that particular name, `injectStore()` injects all stores.
  - Or just get rid of `injectStore` and use the `mobx-react`'s `inject` directly?

- Extract into npm module.
