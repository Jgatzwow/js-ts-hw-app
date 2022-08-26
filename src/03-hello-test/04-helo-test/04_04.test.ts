import {CityTypeForTest} from "../02-hello-tests/02_02";
import {addMoneyToBudget, createMessage, repairHouses, toFireStaff, toHireStaff} from "./04";


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

test("Budget should be changed for Hospital", () => {

    addMoneyToBudget(city.governmentBuildings[0], 100000);


    expect(city.governmentBuildings[0].budget).toBe(300000);
})

test("Budget should be changed for Fire-Station", () => {

    addMoneyToBudget(city.governmentBuildings[1], -100000);


    expect(city.governmentBuildings[1].budget).toBe(400000);
})

/*test("Houses should be destroyed", () => {

    demolishHouses(city, "Happy Street");


    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})*/

test("Houses should be repaired", () => {

    repairHouses(city.houses[1]);


    expect(city.houses[1].repaired).toBe(true);
})

test("staff should be decreased", () => {

    toFireStaff(city.governmentBuildings[0], 20);


    expect(city.governmentBuildings[0].staffCount).toBe(180);
})


test("staff should be increased", () => {

    toHireStaff(city.governmentBuildings[0], 20);
    toHireStaff(city.governmentBuildings[1], 100);


    expect(city.governmentBuildings[0].staffCount).toBe(220);
    expect(city.governmentBuildings[1].staffCount).toBe(1100);
})


test("greeting message for city", () => {

    const message = createMessage(city);



    expect(message).toBe("Hello Kiev");
})