import { getItem, setItem } from 'localforage'

export async function load(key) {
  try {
    const serialized = await getItem(key)
    return JSON.parse(serialized)
  } catch (_) {
    return null
  }
}

export async function save(key, value) {
  try {
    if (typeof value === 'object') {
      await setItem(key, JSON.stringify(value))
    } else {
      await setItem(key, value)
    }
    return true
  } catch (_) {
    return false
  }
}
