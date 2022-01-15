const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');
const intern = new Intern('Mat', '4444', 'mat@hotmail.com', 'school');


test('test intern constructor', () => {
    expect(intern.name).toBe('Mat');
    expect(intern.id).toBe('4444');
    expect(intern.email).toBe('mat@hotmail.com');
    expect(intern.school).toBe('school');
  });

  // test methods //
test('test getName method', () => {
    expect(intern.getName()).toBe('Mat');
  });
  test('test getId method', () => {
    expect(intern.getId()).toBe('4444');
  });
  test('test getEmail method', () => {
    expect(intern.getEmail()).toBe('mat@hotmail.com');
  });
  test('test getSchool', () => {
    expect(intern.getSchool()).toBe('school');
  });
  test('test getRole method', () => {
    expect(intern.getRole()).toBe('Intern');
  });
  