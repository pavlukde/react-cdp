import { courses } from './courses'

describe('courses reducer', () => {

  it('should return the initial state', () => {
    expect(
      courses([{some:'value'}], {}))
      .toEqual([
        {some:'value'}
      ])
  })

  it('should handle RECEIVE_SEARCH', () => {
    expect(
      courses([], {
        type: 'RECEIVE_SEARCH',
        courses: [1,2,3]
        
      })
    ).toEqual(
      {
        data: [1,2,3]
      }
    )
  })
})