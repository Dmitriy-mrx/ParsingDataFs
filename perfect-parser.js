const fs = require('fs')
const Person = require('./person')
// let person = new Person()


class PerfectParser {
  parse(filename) {
    const readFile = fs.readFileSync(filename, 'utf-8')
    const addArray = readFile.split('\n')

    let peoples = [];
    addArray.forEach((element) => {
      element = element.split(',')
      let date = new Date(element[4]).toDateString()
      element = new Person(element[0], element[1], element[2], element[3], date)
      peoples.push(element)
    })
    return peoples
  }

  write(filename, people) {
    let string = people.map(el => Object.values(el).join(',')).join('\n')
    fs.writeFileSync(filename, string)
  }


}
const parser = new PerfectParser();
const people = parser.parse('people.csv');
let persers = parser.write('friends.csv', people)
// console.log(people);


