export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Michael Michael', age: 22},
    {name: 'Genya Genya', age: 19},
    {name: 'Roma Roma', age: 23}
]

const transformer = (man: ManType) => ({

    stack: ['css', 'html', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})


const devs = [
    {
        stack: ['css', 'html', 'tdd', 'react'],
        firstName: 'Michael', lastName: 'Michael'
    },
    {
        stack: ['css', 'html', 'tdd', 'react'],
        firstName: 'Genya', lastName: 'Genya'
    },
    {
        stack: ['css', 'html', 'tdd', 'react'],
        firstName: 'Roma', lastName: 'Roma'
    },
]

const dev2 = [transformer(people[0]), transformer(people[1]), transformer(people[2])]
const dev3 = people.map(transformer)
const dev4 = people.map(man => ({
    stack: ['css', 'html', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))


export const createGreetingsMessage = (people: Array<ManType>) => {
    return people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome`)

}