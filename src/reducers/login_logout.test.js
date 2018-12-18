import { login_logout } from './login_logout'

describe('courses reducer', () => {

  it('should return the initial state', () => {
    expect(
      login_logout([{some:'value'}], {}))
      .toEqual([
        {some:'value'}
      ])
  })

  it('should handle LOGIN', () => {
    expect(
      login_logout([], {
        type: 'LOGIN',
        userName: 'test'
      })
    ).toEqual(
      {
        "isAuthenticated": true,
        "userName": 'test',
      }
    )
  })

  it('should handle LOGOUT', () => {
    expect(
      login_logout([], {
        type: 'LOGOUT'
      })
    ).toEqual(
      {
        "isAuthenticated": false,
        "userName": undefined,
      }
    )
  })

})