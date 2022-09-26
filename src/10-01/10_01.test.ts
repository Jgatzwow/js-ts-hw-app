import {
    addCompanyToUserCV,
    addNewBooksForUser,
    changeHairStyle,
    changeUsersCity, ChangeUsersHouse,
    changeUsersLapTop, removeBookFromUser, updateBookForUser, updateCompanyInUserCV,
    UserType,
    UserWithBooksType,
    UserWithLapTopType, WithCompaniesType
} from './10_01';


test('reference type test', ()=> {
    let user: UserType = {
        name: 'Michael',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        }
    }

    const newUser = changeHairStyle(user, 2)

    expect(newUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(newUser.address).toBe(user.address)
})

test('change user address', ()=> {
    let user: UserWithLapTopType = {
        name: 'Michael',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        }
    }

    const newUser = changeUsersCity(user, 'New-York')

    expect(user.address.title).toBe('Kiev')
    expect(newUser.address.title).toBe('New-York')
    expect(newUser).not.toBe(user)
    expect(newUser.laptop).toBe(user.laptop)
})

test('change laptop brand', ()=> {
    let user: UserWithLapTopType = {
        name: 'Michael',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        }
    }

    const newUser = changeUsersLapTop(user, 'MacBook')

    expect(user.laptop.title).toBe('ASUS')
    expect(newUser.laptop.title).toBe('MacBook')
    expect(newUser).not.toBe(user)
    expect(newUser.address).toBe(user.address)
    expect(newUser.laptop).not.toBe(user.laptop)
})

test('move User to another house', ()=> {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'Michael',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css', 'js', 'react']

    }

    const newUser = ChangeUsersHouse(user, 100500)

    expect(user.address.house).toBe(12)
    expect(newUser.address.house).toBe(100500)
    expect(newUser).not.toBe(user)
    expect(newUser.books).toBe(user.books)
    expect(newUser.address).not.toBe(user.address)
})


test('add new books for user', ()=> {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'Michael',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css', 'js', 'react', 'html']

    }

    const newUser = addNewBooksForUser(user, ['typescript', 'rest api'])

    expect(newUser.books).not.toBe(user.books)
    expect(newUser.address).toBe(user.address)
    expect(newUser.books[4]).toBe('typescript')
    expect(newUser.books[5]).toBe('rest api')
    expect(user.books.length).toBe(4)
})

test('update js book to ts', ()=> {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'Michael',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css', 'js', 'react', 'html']

    }

    const newUser = updateBookForUser(user, 'ts')
    expect(newUser.books).not.toBe(user.books)
    expect(newUser).not.toBe(user)
    expect(newUser.address).toBe(user.address)
    expect(newUser.books[1]).toBe('ts')
    expect(user.books[1]).toBe('js')

})

test('remove js book from books', ()=> {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'Michael',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css', 'js', 'react', 'html']

    }

    const newUser = removeBookFromUser(user, 'js')
    expect(newUser.books).not.toBe(user.books)
    expect(newUser.books.length).toBe(3)
    expect(user.books.length).toBe(4)
    expect(newUser).not.toBe(user)
    expect(newUser.address).toBe(user.address)
    expect(newUser.books[1]).toBe('react')
    expect(user.books[1]).toBe('js')

})

test('add company to user cv', ()=> {
    let user: UserWithLapTopType & WithCompaniesType = {
        name: 'Michael',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'It-incubator'}
        ]

    }

    const newUser = addCompanyToUserCV(user, {id:3 ,title:'Google'})

    expect(newUser.companies).not.toBe(user.companies)
    expect(newUser.companies.length).toBe(3)
    expect(user.companies.length).toBe(2)
    expect(newUser).not.toBe(user)
    expect(newUser.companies[2]).toEqual({id:3 ,title:'Google'})
    expect(user.companies[2]).toBe(undefined)

})
test('update company in cv', ()=> {
    let user: UserWithLapTopType & WithCompaniesType = {
        name: 'Michael',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'It-incubator'}
        ]

    }

    const newUser = updateCompanyInUserCV(user, 'EPAM')

    expect(newUser.companies).not.toBe(user.companies)
    expect(newUser.companies.length).toBe(2)
    expect(newUser).not.toBe(user)
    expect(user.companies[0].title).toBe('Epam')
    expect(newUser.companies[0].title).toBe('EPAM')

})