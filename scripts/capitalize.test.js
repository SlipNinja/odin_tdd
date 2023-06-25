import { capitalize } from "./capitalize.js";

test('Capitalize', () => {
    expect(capitalize("hello")).toBe("Hello");
});