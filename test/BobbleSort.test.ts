import { test, expect } from "@jest/globals";
import bobbleSort from "../src/BubbleSort";


test("should pass", () => {
	let arr = [4,3,1,5,1];
	bobbleSort(arr);
	expect(arr).toStrictEqual([1,1,3,4,5]);
})