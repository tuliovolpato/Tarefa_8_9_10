const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        placa: 'AAA-0000',
        marca: 'lamborghini',
        nome: 'Aventador',
        ano: 2011,
        km: 50000,
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro placa', () => {
    const result = Validation.create({
        marca: 'lamborghini',
        nome: 'Aventador',
        ano: 2011,
        km: 50000,
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

console.log("Passou validATION")