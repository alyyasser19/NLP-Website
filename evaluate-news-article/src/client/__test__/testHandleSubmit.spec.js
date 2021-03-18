// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'

import handleSubmit from '../js/formHandler'

describe('Testing submit', () => {
    test('Testing handleSubmit()', () => {
        expect(handleSubmit).toBeDefined()
    })
})
