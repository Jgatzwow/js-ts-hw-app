export type UserType = {
    name: string
    hair: number
    address: { title: string, house: number }
}
export type LapTopType = {
    title: string
}

export type UserWithLapTopType = UserType & {
    laptop: LapTopType
}
export type UserWithBooksType = UserType & {
    books: string[]
}
export type WithCompaniesType = UserType & {
    companies: Array<{id: number, title: string}>
}
export const ChangeUsersHouse = (u: UserWithLapTopType & UserWithBooksType, house: number) => {
    return {...u, address: {...u.address, house}}
}


export function changeHairStyle(u: UserType, amount: number) {
    return {...u, hair: u.hair / amount}
}

export function changeUsersCity(u: UserWithLapTopType, city: string) {
    return {...u, address: {...u.address, title: city}}
}

export function changeUsersLapTop(u: UserWithLapTopType, brand: string) {
    return {...u, laptop: {...u.laptop, title: brand}}
}

export const addNewBooksForUser = (u: UserWithLapTopType & UserWithBooksType, books: Array<string>) => {
    return {...u, books: [...u.books, ...books]}
}
export const updateBookForUser = (u: UserWithLapTopType & UserWithBooksType, newBookVal: string) => {
    return {...u, books: u.books.map(b => b === 'js' ? newBookVal : b)}
}

export const removeBookFromUser = (u: UserWithLapTopType & UserWithBooksType, bookName: string) => {
    return {...u, books: u.books.filter(b => b !== bookName)}
}
export const addCompanyToUserCV = (u: UserWithLapTopType & WithCompaniesType, newComp: {id: number, title: string}) => {
    return {...u, companies: [...u.companies, newComp] }
}
export const updateCompanyInUserCV = (u: WithCompaniesType, newCompName:string) => {
    return {...u, companies: u.companies.map( c => c.title === 'Epam'? {...c, title: newCompName} : c) }
}