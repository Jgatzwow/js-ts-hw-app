import {CityTypeForTest} from '../../02-hello-tests/02_02';
import {demolishBuildings, getBuildingsWithStaffCount} from './04_02';

let city: CityTypeForTest;


beforeEach(() => {

    city = {
        title: "Kiev",
        houses: [
            {
                id: 1,
                builtAt: 2012, repaired: false,
                address: {number: 100, street: {title: "Some Street"}}
            },
            {
                id: 2,
                builtAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy Street"}}
            },
            {
                id: 3,
                builtAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy Street"}}
            },

        ],
        governmentBuildings: [
            {
                type: "Hospital",
                budget: 200000,
                staffCount: 200,
                address:
                    {
                        street: {
                            title: "Central Street"
                        }
                    }
            },
            {
                type: "Fire-Station",
                budget: 500000,
                staffCount: 1000,
                address:
                    {
                        street: {
                            title: "South Street"
                        }
                    }
            },

        ],
        citizensNumber: 10000000
    }
})

test('should return only 1 house on Some street ', () => {

demolishBuildings(city, 'Happy Street')


    expect(city.houses.length).toBe(1)
    expect(city.houses[0].address.street.title).toBe('Some Street')

})

test('should return only gov building with staff count more than 200 ', () => {

    getBuildingsWithStaffCount(city, 200)


    expect(city.governmentBuildings.length).toBe(1)
    expect(city.governmentBuildings[0].staffCount).toBe(1000)

})


