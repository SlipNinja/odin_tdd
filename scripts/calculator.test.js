import { Calculator } from "./calculator.js";

const calc = new Calculator();

test('Add', () => {
    expect(calc.add(2, 4)).toBe(6);
});

test('Substract', () => {
    expect(calc.substract(2, 4)).toBe(-2);
});

test('Divide', () => {
    expect(calc.divide(2, 4)).toBe(.5);
});

test('Multiply', () => {
    expect(calc.multiply(2, 4)).toBe(8);
});