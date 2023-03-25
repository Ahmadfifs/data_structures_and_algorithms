import { test, expect } from "@jest/globals";
import twoCrystalBalls from "../src/TwoCrystalBalls";

test('Should pass', () => { 
	expect(twoCrystalBalls([false, false, false, false, false, true, true, true, true])).toBe(5);
});

test('should pass', () => { 
	expect(twoCrystalBalls([false, true, true, true, true])).toBe(1);
});

test('should pass', () => { 
	expect(twoCrystalBalls([false, true])).toBe(1);
});

test('should pass', () => { 
	expect(twoCrystalBalls([true, true])).toBe(0);
});


test("should fail", () => {
	expect(twoCrystalBalls([false, false, false, false, false])).toBe(-1);
});

test('should pass', () => { 
	expect(twoCrystalBalls([false, false, false, false, true])).toBe(4);
});


