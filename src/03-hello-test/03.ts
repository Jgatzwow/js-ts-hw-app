import {StudentType} from "../02-hello-tests/02";
import {CityTypeForTest, GovernmentBuildingsType, HousesType} from "../02-hello-tests/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}

export function sum1(a: number, b: number) {
    return a + b
}


export const addSkill = (s: StudentType, skill: string) => {
    s.technologies.push({
        id: new Date().getTime(),
        techName: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}
export function doesStudentLiveIn(s: StudentType, cityName: string) {
return s.address.city.cityName === cityName;
}

export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
building.budget += budget
}

export const repairHouses = (houseType: HousesType) => {
    houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingsType, sc: number) => {
    building.staffCount -= sc;
}

export const toHireStaff = (building: GovernmentBuildingsType, sc: number) => {
    building.staffCount += sc;
}

export function createMessage (props: CityTypeForTest) {
    return `Hello ${props.title}`
}