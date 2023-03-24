import { test, expect } from "@jest/globals";
import linserSearch from "./src/LinearSearch";

test('Should pass', () => { 
	expect(linserSearch([1,2,3,4,1,2,3], 2)).toBe(true);
});

test('should fail', () => { 
	expect(linserSearch([1,2,3,4,5,6], 10)).toBe(false);
 })