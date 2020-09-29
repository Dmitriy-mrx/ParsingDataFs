const Person = require('../person.js');

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Jayde', 'Beahan', 'beahan.jayde@gmail.com', '1-542-555-5812', '2004-01-06');
  });

  describe('first_name', () => {
    it('has an first_name', () => {
      expect(person.first_name).toEqual('Jayde')
    });
  });

  describe('last_name', () => {
    it('has a last_name', () => {
      expect(person.last_name).toEqual('Beahan')
    });
  });
  describe('email', () => {
    it('has a email', () => {
      expect(person.email).toEqual('beahan.jayde@gmail.com')
    });
  });
  describe('phone', () => {
    it('has a phone', () => {
      expect(person.phone).toEqual('1-542-555-5812')
    });
  });
  describe('born_at', () => {
    it('has a born_at', () => {
      expect(person.born_at).toEqual('2004-01-06')
    });
  });
})
