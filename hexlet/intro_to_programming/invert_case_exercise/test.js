import invertCase from './solution.js';

test('Инвертированный регистр' + '\n  # ' + 'Введение в программирование', () => {
    expect(invertCase('Hello, World!')).toBe('hELLO, wORLD!');
    expect(invertCase('I loVe JS')).toBe('i LOvE js');
});