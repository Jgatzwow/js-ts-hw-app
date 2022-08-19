type cityType = {
    cityName: string
    countryName: string
}
type TechType = {
    id: number
    techName: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}
type AddressType = {
    street: string
    city: cityType
}

export const student: StudentType = {
    id: 1,
    name: "Michael",
    age: 29,
    isActive: true,
    address: {
        street: "someStreet",
        city: {
            cityName: "Kiev",
            countryName: "Ukraine",
        }
    },
    technologies: [
        {
            id: 1,
            techName: "HTML",
        },
        {
            id: 2,
            techName: "CSS",
        },
        {
            id: 3,
            techName: "React",
        },
    ]
}
console.log(student.age)
console.log(student.name)
console.log(student.address.city.cityName)
console.log(student.technologies[2].techName)