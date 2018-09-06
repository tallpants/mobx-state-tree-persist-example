import { inject } from 'mobx-react'

export const injectStore = component => inject('store')(component)
