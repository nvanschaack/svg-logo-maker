const inquirer = require('inquirer')
const fs = require('fs')
const { Circle, Triangle, Square } = require('./lib/shapes')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What text would you like your logo to have (only 3 characters long)?'
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'What color would you like your text to have (enter a color keyword or hexadecimal number)?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to have?',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'What color would you like your shape to have (enter a color keyword or hexadecimal number)?',
        },
    ])
    .then((response) => {
        // console.log(response)
        
        // const logoInfo = `I want my logo to read ${response.text} in ${response.textcolor}. It will be in the shape of a ${response.shape} that is ${response.shapecolor}.`

        let chosenShape;
        
        // create conditonal that will check what shape the user chose to then determine what shape we will render in the logo.svg file
        if (response.shape === 'circle') {
            chosenShape = new Circle(response.text, response.textcolor, response.shapecolor);

        } else if (response.shape === 'triangle') {
            //render(triangle)
            chosenShape = new Triangle(response.text, response.textcolor, response.shapecolor);
        } else {
            //render square
            chosenShape = new Square(response.text, response.textcolor, response.shapecolor);
        }

        fs.writeFile('logo.svg', chosenShape.render(), (error) => {
            if (error) {
                console.log('Try Again!')
            } else {
                console.log('Generated logo.svg')
            }
        })
    })