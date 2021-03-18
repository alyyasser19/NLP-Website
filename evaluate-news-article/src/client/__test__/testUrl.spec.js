// TODO: import the url check function
import  checkURL  from '../js/checkURL'

describe('Test check URL functionality', () => {
    test('Testing the checkURL function', () => {
        expect(checkURL).toBeDefined()
    })

    test('checkUrl return false for invalid url', () => {
        expect(checkURL('balabizo')).toBeFalsy()
    })

    test('checkUrl return true for valid url', () => {
        expect(checkURL('google.com')).toBeTruthy()
    })
})
