import {CityTypeForTest} from '../../02-hello-tests/02_02';

export function demolishBuildings(city:CityTypeForTest, street: string) {
 city.houses = city.houses.filter( h => h.address.street.title !== street);
}

export const getBuildingsWithStaffCount = (city: CityTypeForTest, sCount: number) => {
 city.governmentBuildings = city.governmentBuildings.filter( gb => gb.staffCount > sCount)
}

