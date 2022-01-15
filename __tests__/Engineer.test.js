const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Joe', '3333', 'joeb@hotmail.com', '200');


test('test Manager constructor', () => {
    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toBe('3333');
    expect(engineer.email).toBe('joe@hotmail.com');
    expect(engineer.officeNumber).toBe('100');
  });

  // test methods //
test('test getName method', () => {
    expect(engineer.getName()).toBe('Joe');
  });
  test('test getId method', () => {
    expect(engineer.getId()).toBe('3333');
  });
  test('test getEmail method', () => {
    expect(engineer.getEmail()).toBe('joe@hotmail.com');
  });
  test('test getRole method', () => {
    expect(engineer.getRole()).toBe('Engineer');
  });
  test('test getOfficeNum', () => {
      expect(engineer.getOfficeNum()).toBe('200');
  });