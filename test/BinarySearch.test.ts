import { test, expect } from "@jest/globals"
import binarySearch from "../src/BinarySearch"

test('should pass', () => { 
	expect(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 4)).toBe(true);
 })


 test('should fail', () => {
	expect(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 0 )).toBe(false);
 })

 test('Should pass', () => { 
	expect(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 11 )).toBe(true);
});

 test('Should fail', () => { 
	expect(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 20 )).toBe(false);
});