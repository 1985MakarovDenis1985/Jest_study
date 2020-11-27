import {Lodash} from "./syncJest";
let _ = new Lodash()

describe('Lodash: compact ',  () => {
    let arr
    // перед каждым тестом определяем глобальное значение переменной(массива)
    beforeEach(()=>{
        arr = [false, 1, 0, 7, 8, '', true, "hello"]
    })
    //
    afterAll(()=>{
        _ = new Lodash()
    })

    // ------------------------------------------ //
    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })
    test('should working arr be editable', () => {
        arr.push(...['one', 'two']) // добавляем в массив два элемента
        expect(_.compact(arr)).not.toContain(false)

    })
    test('remove falsy values from arr', () => {
        const result = [1, 7, 8, true, "hello"]
        expect(_.compact(arr)).toEqual(result) // toEqual - для сравнения более сложных элементов (массивы, объекты)
    })
    test('should NOT contain falsy values', () => {
        const arr = [false, 1, 0, 7, 8, '', true, "hello"]
        expect(_.compact(arr)).not.toContain(false)
        expect(_.compact(arr)).not.toContain(0)
        expect(_.compact(arr)).not.toContain('')
    })
})

describe('Lodash: GroupBy', () => {
    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })
    test('should group arr item by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })
    test('should group arr item by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            5: ['three'],
            3: ['one', 'two'],
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })
})

