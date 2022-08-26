test('should select older men ', () => {
    const ages = [18, 20, 22, 1, 90, 100, 14]

    const oldAged = ages.filter(a => a > 90);

    expect(oldAged.length).toBe(1)
    expect(oldAged[0]).toBe(100)

})

test('should select cheap courses 160 or less ', () => {
    const courses = [
        {title: 'Css', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    const cheapCourses = courses.filter(c => c.price < 160);

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].price).toBe(110)
    expect(cheapCourses[0].title).toBe('Css')
    expect(cheapCourses[1].price).toBe(150)
    expect(cheapCourses[1].title).toBe('REACT')

})


