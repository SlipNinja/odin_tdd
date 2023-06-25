import { reverse } from "./reverseString.js";

test('Reverse', () => {
    expect(reverse("! dlrow ,olleH")).toBe("Hello, world !");
});