import { removeAccents } from './removeAccents'

describe('removeAccents', () => {
  test('removes accents from a string', () => {
    const input = 'café'
    const expected = 'cafe'
    const output = removeAccents(input)
    expect(output).toEqual(expected)
  })

  test('works with uppercase characters', () => {
    const input = 'ÁrvÖrè'
    const expected = 'ArvOre'
    const output = removeAccents(input)
    expect(output).toEqual(expected)
  })

  test('does not remove non-accented characters', () => {
    const input = 'hello world'
    const output = removeAccents(input)
    expect(output).toEqual(input)
  })
})
