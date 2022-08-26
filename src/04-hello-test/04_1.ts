const ages = [18, 20, 22, 1, 90, 100, 14]

const predicate = (age: number) => {
    return age > 90
}


const courses = [
    {title: 'Css', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

type CourseType = {
    title: string
    price: number
}

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const cheapCourses = []