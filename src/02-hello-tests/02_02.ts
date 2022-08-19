export type CityTypeForTest = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}
export type HousesType = {
    id: number
    builtAt: number
    repaired: boolean
    address: AddressType
}
export type GovernmentBuildingsType = {
    type: "Hospital" | "Fire-Station"
    budget: number
    staffCount: number
    address: AddressType
}
type AddressType = {
    number?: number
    street: StreetType
}
type StreetType = {
    title: string
}

