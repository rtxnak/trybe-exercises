const { it } = require('@jest/globals');
const { encode, decode } = require('./playGroundFunction01');

describe('The function encode and decode', () => {
  it('Teste se encode e decode são funções;', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  it('função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, ;', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it('função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u ', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it('as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('aaa')).toEqual('111');
    expect(encode('eee')).toEqual('222');
    expect(encode('iii')).toEqual('333');
    expect(encode('ooo')).toEqual('444');
    expect(encode('uuu')).toEqual('555');
    expect(decode('1b1')).toEqual('aba');
    expect(decode('2b2')).toEqual('ebe');
    expect(decode('3b3')).toEqual('ibi');
    expect(decode('4b4')).toEqual('obo');
    expect(decode('5b5')).toEqual('ubu');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('trybe').length).toEqual(5);
  });
  
});