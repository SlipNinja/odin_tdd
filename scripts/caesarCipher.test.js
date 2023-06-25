import { caesar } from "./caesarCipher.js";

test('Happy', () => {
    expect(caesar("hello", 7)).toBe("olssv");
});

test('Uppercase', () => {
    expect(caesar("Hello", 7)).toBe("Olssv");
});

test('Special characters', () => {
    expect(caesar("Hello, world !", 7)).toBe("Olssv, dvysk !");
});

test('Negative offset', () => {
    expect(caesar("Hello, world !", -19)).toBe("Olssv, dvysk !");
});

test('Big offset', () => {
    expect(caesar("Hello, world !", 33)).toBe("Olssv, dvysk !");
});

test('Big negative offset', () => {
    expect(caesar("Hello, world !", -45)).toBe("Olssv, dvysk !");
});

test('Decimal offset', () => {
    expect(caesar("Hello, world !", 7.2)).toBe("Olssv, dvysk !");
});