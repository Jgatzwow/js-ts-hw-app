import {StudentType} from "../02-hello-tests/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Michael",
        age: 29,
        isActive: false,
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
})


test("new skill name should be added", () => {

    expect(student.technologies.length).toBe(3);
    addSkill(student, "JS");


    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].techName).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})

test("student name should be made active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);


    expect(student.isActive).toBe(true);


})

test("student  should be living in city", () => {


    let result1 = doesStudentLiveIn(student, "Tbilisi");
    let result2 = doesStudentLiveIn(student, "Kiev");


    expect(result1).toBe(false);
    expect(result2).toBe(true);


})