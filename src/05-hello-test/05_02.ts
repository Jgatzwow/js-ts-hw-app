import {CityTypeForTest, GovernmentBuildingsType} from '../02-hello-tests/02_02';

export const getGovBuildingsStreetTitles =
    (gb: Array<GovernmentBuildingsType>) => {
    return gb.map( b => b.address.street.title)
}

export const getHousesStreetTitles =
    (city: CityTypeForTest) => {
        return city.houses.map( h => h.address.street.title)
    }