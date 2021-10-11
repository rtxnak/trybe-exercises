const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui a chave fetchMenu, a qual tem como valor uma função.', () => {

    expect(typeof createMenu().fetchMenu).toBe('function');

    // const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... 
  });

  it('TESTE 2: Verifique se objetoRetornado.fetchMenu() retorna um objeto cujas chaves são somente `food` e `drink`', () => {
    const objetoRetornado = createMenu({ food: {}, drink: {} })
    expect(objetoRetornado.fetchMenu()).toEqual({ food: {}, drink: {} });

    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.
    // const objetoRetornado = createMenu({ food: {}, drink: {} });
    // objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}

  });

  it('TESTE 3: Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função objetoRetornado.fetchMenu', () => {
    const objetoRetornado = createMenu({ desert: {}, salad: {} })
    expect(objetoRetornado.fetchMenu()).toEqual({ desert: {}, salad: {} });

    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu() // Retorno: objetoQualquer
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
  });

  it('TESTE 4: Verifique se objetoRetornado.consumption, após a criação do menu, retorna um array vazio.', () => {
    const objetoRetornado = createMenu({ desert: {}, salad: {} })
    expect(objetoRetornado.consumption).toEqual([]);

    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []
    // ```
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // 
  });

  it('TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado,', () => {
    const objetoRetornado = createMenu({ desert: {}, salad: {} });
    objetoRetornado.order('coxinha');
    expect(objetoRetornado.consumption).toEqual(['coxinha']);
    // passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada
    // ao array retornado em `objetoRetornado.consumption`.
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.consumption // Retorno: ["coxinha"]
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
  });

  it('TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    const objetoRetornado = createMenu({ desert: {}, salad: {} });

    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");

    expect(objetoRetornado.consumption).toEqual(['agua', 'sopa', 'sashimi']);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.order("agua");
    // objetoRetornado.order("sopa");
    // objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    objetoRetornado.order = ''
  });

  it('TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
    const objetoRetornado = createMenu({ desert: {}, salad: {} });

    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');

    expect(objetoRetornado.consumption).toEqual(['coxinha', 'agua', 'coxinha']);

    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.consumption // Retorno: ['coxinha', 'agua', 'coxinha']
  });

  it('TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption', () => {
    const objetoRetornado = createMenu({ food: { coxinha: 13.9, sopa: 19.9 }, drink: { agua: 3.9, cerveja: 6.9 } });

    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');

    expect(objetoRetornado.pay()).toBe(34.870000000000005);

    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
  });

});
