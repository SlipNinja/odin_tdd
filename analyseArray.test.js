import { analyse } from "./analyseArray.js";

const array = [4, 6, 9, 3, 7, 1, 7, 3];

test('Analyse', () => {
    expect(analyse(array))
        .toEqual({
            average : 5,
            min : 1,
            max : 9,
            length : 8
        });
});