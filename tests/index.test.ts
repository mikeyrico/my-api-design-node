import { start } from '../src'

describe('start', () => {
  test('go', () => {
    expect(start()).toBe('go')
  })
})
