import { coursesSelector } from './coursesSelector'

describe('courses selector', () => {

  it('should return the courses from state', () => {
    expect(
        coursesSelector({
            courses:{data:'some_courses'}
        }))
        .toEqual(
            'some_courses'
        )
    })

})