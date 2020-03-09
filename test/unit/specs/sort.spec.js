import {sortItems, sortNullableItems} from '@/utils/sort'
import TestComp from '@/components/TestComp'

describe('Sort utility methods for strings', () => {
  it('sorts two strings naturally', () => {
    expect(sortItems('a', 'b')).toEqual(-1)
    expect(sortItems('a', 'a')).toEqual(0)
    expect(sortItems('b', 'a')).toEqual(1)
  })
  it('sorts two strings checking case', () => {
    expect(sortItems('a', 'B')).toEqual(1)
    expect(sortItems('A', 'b')).toEqual(-1)
    expect(sortItems('a', 'A')).toEqual(1)
    expect(sortItems('A', 'a')).toEqual(-1)
    expect(sortItems('B', 'a')).toEqual(-1)
    expect(sortItems('b', 'A')).toEqual(1)
  })
})
describe('Sort utility methods for dates', () => {
  it('sorts two dates naturally', () => {
    expect(sortItems('2018-03-05', '2018-05-03')).toEqual(-1)
    expect(sortItems('2018-03-05', '2018-03-05')).toEqual(0)
    expect(sortItems('2018-05-03', '2018-03-05')).toEqual(1)
  })
  it('sorts two dates naturally when we are expecting nulls', () => {
    expect(sortNullableItems('2018-03-05', '2018-05-03')).toEqual(-1)
    expect(sortNullableItems('2018-03-05', '2018-03-05')).toEqual(0)
    expect(sortNullableItems('2018-05-03', '2018-03-05')).toEqual(1)
  })
  it('sorts two dates naturally coping with nulls', () => {
    expect(sortNullableItems('2018-03-05', null)).toEqual(-1)
    expect(sortNullableItems(null, '2018-03-05')).toEqual(1)
    expect(sortNullableItems(null, null)).toEqual(0)
  })
})
