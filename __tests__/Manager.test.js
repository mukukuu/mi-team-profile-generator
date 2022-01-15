const { expect } = require('@jest/globals');
const Manager = require('../libManager');
const manager = new Manager('Bob', '2222', 'bob@hotmail.com', '100');


test('test Manager constructor', () => {
    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe('2222');
    expect(employee.email).toBe('bob@hotmail.com');
    expect(employee.officeNumber).toBe('100');
  });

  