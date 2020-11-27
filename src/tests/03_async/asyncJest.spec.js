import {Ajax} from "./asyncJest";
import axios from 'axios'

jest.mock('axios')

describe('Ajax: echo',  () => {
    const smtData ='some data'

    // через async / await
    test('should return value async', async () =>{
        const result = await Ajax.echo(smtData)
        expect(result).toBe(smtData)
    })

    // через промис
    test('should return with promise',  () =>{
        // return возвращать обязательно
        return Ajax.echo(smtData).then((data)=>{
            expect(data).toBe(smtData)
        })
    })

    // отлавливаем ошибки
    test('should catch error with promise',  () =>{
        // return возвращать обязательно
        return Ajax.echo().catch(err=>{
            expect(err).toBeInstanceOf(Error)
        })
    })

    // try / catch
    test('should try | catch',  async () =>{
        try {
            await Ajax.echo()
        } catch (e){
            expect(e.message).toBe('error')
        }
    })
})

describe('Ajax: get =>', () => {
    let response
    let todos

    beforeEach(()=>{
        todos = [{id:1, name: 'Ymy', age: 333}]
        response = {
            data: {
                todos
            }
        }
    })

    test('should return data from beck-end', () => {
        axios.get.mockReturnValue(response)

        return Ajax.get().then(data => {
            expect(data.todos).toBe(todos)
        })
    })
})