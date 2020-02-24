/**
 * Useful functions to do frontend sorting
 *
 */

export function sortBy (f, ls) {
  return ls.sort((left, right) => sortItems(f(left), f(right)))
}

export function sortItems (left, right) {
  return sortItemsThen(left, right, 0)
}

export function sortNullableItems (left, right) {
  if ((left) && (right)) {
    return sortItems(left, right)
  } else if (left) return -1
  else if (right) return 1
  else return 0
}

export function sortItemsThen (left, right, then) {
  if (left === right) {
    return then
  } else {
    return (left < right) ? -1 : 1
  }
}
  
  