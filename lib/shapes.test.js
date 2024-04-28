const { Circle, Triangle, Square } = require('./shapes')

// I expect the new instance of class Circle to be an object

describe('Circle', () => {
    const circle = new Circle('nvs', 'green', 'pink')
    // test('I expect the new instance of class Circle to be an object', () => {
    //     console.log(typeof circle);
    //     expect(typeof circle).toEqual('object')
    // })
    // I expect the class Circle to render the svg code.
    test('i expect the render method to return a string for the svg file', () => {
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="pink" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">nvs</text></svg>`)
    })

})

describe('Triangle', () => {
    const triangle = new Triangle('nvs', 'green', 'pink')

    test('i expect the render method to return a string for the svg file', () => {
        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="pink" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">nvs</text></svg>`)
    })
})

describe('Square', () => {
    const square = new Square('nvs', 'green', 'pink')

    test('i expect the render method to return a string for the svg file', () => {
        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="pink" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">nvs</text></svg>`)
    })
})
