import { sum } from '../Sum'
test("Sum fn should calculate the sum of two numbers", () => {
    const result = sum(1, 3);
    //Assertion
    expect(result).toBe(4)
});