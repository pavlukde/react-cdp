import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates RECEIVE_SEARCH when searching courses has been done', () => {
    fetchMock.getOnce('http://localhost:3001/courses?q=', {
        courses: { courses: ['some courses'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
        {"courses": {"courses": {"courses": ["some courses"]}, "headers": {"content-type": "application/json"}}, "type": "RECEIVE_SEARCH"}]


    const store = mockStore({ courses: [] })

    return store.dispatch(actions.requestSearch('')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates RECEIVE_SEARCH when adding a course has been done', () => {
    fetchMock.postOnce('http://localhost:3001/courses/', {
        courses: { courses: ['some courses'] },
        headers: { 'content-type': 'application/json' }
    })

    fetchMock.getOnce('http://localhost:3001/courses?q=', {
        courses: { courses: ['some courses'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
        {"courses": {"courses": {"courses": ["some courses"]}, "headers": {"content-type": "application/json"}}, "type": "RECEIVE_SEARCH"}]


    const store = mockStore({ courses: [] })

    return store.dispatch(actions.requestAdd({})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})