const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Joe', '3333', 'joe@hotmail.com', 'https://github.com/username');


test('test Manager constructor', () => {
    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toBe('3333');
    expect(engineer.email).toBe('joe@hotmail.com');
    expect(engineer.github).toBe('https://github.com/username');
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
  test('test github', () => {
      expect(engineer.getGithub()).toBe('https://github.com/username');
  });