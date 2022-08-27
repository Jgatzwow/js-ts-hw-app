import {CityTypeForTest} from '../02-hello-tests/02_02';
import {getGovBuildingsStreetTitles, getHousesStreetTitles} from './05_02';

let city: CityTypeForTest;


beforeEach(() => {

    city = {
        title: 'Kiev',
        houses: [
            {
                id: 1,
                builtAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'Some Street'}}
            },
            {
                id: 2,
                builtAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy Street'}}
            },
            {
                id: 3,
                builtAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy Street'}}
            },

        ],
        governmentBuildings: [
            {
                type: 'Hospital',
                budget: 200000,
                staffCount: 200,
                address:
                    {
                        street: {
                            title: 'Central Street'
                        }
                    }
            },
            {
                type: 'Fire-Station',
                budget: 500000,
                staffCount: 1000,
                address:
                    {
                        street: {
                            title: 'South Street'
                        }
                    }
            },

        ],
        citizensNumber: 10000000
    }
})

test('list of street titles of gov buildings', () => {

    let streetTitles = getGovBuildingsStreetTitles(city.governmentBuildings)

    expect(streetTitles.length).toBe(2)
    expect(streetTitles[0]).toBe('Central Street')
    expect(streetTitles[1]).toBe('South Street')

})

test('list of street titles of houses', () => {

    let streetTitles = getHousesStreetTitles(city)

    expect(streetTitles.length).toBe(3)
    expect(streetTitles[0]).toBe('Some Street')
    expect(streetTitles[1]).toBe('Happy Street')
    expect(streetTitles[2]).toBe('Happy Street')

})

