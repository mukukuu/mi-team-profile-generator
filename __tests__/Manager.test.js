const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
const manager = new Manager('Bob', '2222', 'bob@hotmail.com', '100');


test('test Manager constructor', () => {
    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe('2222');
    expect(manager.email).toBe('bob@hotmail.com');
    expect(manager.officeNumber).toBe('100');
  });

  // test methods //
test('test getName method', () => {
    expect(manager.getName()).toBe('Bob');
  });
  test('test getId method', () => {
    expect(manager.getId()).toBe('2222');
  });
  test('test getEmail method', () => {
    expect(manager.getEmail()).toBe('bob@hotmail.com');
  });
  test('test getRole method', () => {
    expect(manager.getRole()).toBe('Manager');
  });
  test('test getOfficeNum', () => {
      expect(manager.getOfficeNum()).toBe('100');
  });