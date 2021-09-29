const { it } = require('@jest/globals');
const { myFizzBuzz } = require('./myFizzBuzz');

describe('The function myFizzBuzz', () => {
  it('um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  it('um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });

  it('um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toMatch('buzz');
  });

  it('um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('s')).toBeFalsy();
  });

});