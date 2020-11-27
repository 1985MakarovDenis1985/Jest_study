import {sum, nl} from "./mainJest";
// --- toBe, toEqual, toBeLessThan, toBeFalsy ... => matchers

describe('Sum function:', ()=>{
    test(' should return sum of two values', () => {
        expect(sum(3, 3)).toBe(6)
        expect(sum(3, 3)).toEqual(6)
    })
    test(' will be more then ...', () => {
        expect(sum(3, 4)).toBeGreaterThan(5)
        expect(sum(3, 4)).toBeLessThan(10)
    })
    test(" must to be with float value", () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

describe('Nl function', ()=>{
    test('should return false value null', ()=>{
        expect(nl()).toBe(null)
        expect(nl()).toBeNull()
        expect(nl()).toBeFalsy() // undefined, null, 0, ''
        expect(nl()).toBeDefined()
        expect(nl()).not.toBeTruthy() // не пустая строка и тд
        expect(nl()).not.toBeUndefined()
    })
})