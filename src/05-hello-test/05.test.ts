import {createGreetingsMessage, ManType} from './05';


let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: 'Michael Michael', age: 22},
        {name: 'Genya Genya', age: 19},
        {name: 'Roma Roma', age: 23}
    ]
})


test('should return greetings for all people', () => {

    const messages = createGreetingsMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Michael. Welcome')
    expect(messages[1]).toBe('Hello Genya. Welcome')
    expect(messages[2]).toBe('Hello Roma. Welcome')

})

