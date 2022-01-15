
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

//-------- employee constructor test --------//
const employee = new Employee('Sam', '11111', 'sam@hotmail.com');
// test properties //
test('test employee class constructor', () => {
  expect(employee.name).toBe('Sam');
  expect(employee.id).toBe('11111');
  expect(employee.email).toBe('sam@hotmail.com');
});

// test methods //
test('test getName method', () => {
  expect(employee.getName()).toBe('Sam');
});
test('test getId method', () => {
  expect(employee.getId()).toBe('11111');
});
test('test getEmail method', () => {
  expect(employee.getEmail()).toBe('sam@hotmail.com');
});
test('test getRole method', () => {
  expect(employee.getRole()).toBe('Employee');
});

