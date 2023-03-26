import { test, expect } from "@jest/globals";
import Stack from "../src/Stack";



test("push", () => {
	const stack = new Stack<number>();
	stack.push(1);
	stack.push(3);

	expect(stack.peek()).toBe(3);
});


test("pop", () => {
	const stack = new Stack<number>();
	stack.push(1);
	stack.push(3);

	expect(stack.length).toBe(2);
	expect(stack.pop()).toBe(3);
	expect(stack.pop()).toBe(1);
	expect(stack.pop()).toBe(undefined);
	expect(stack.length).toBe(0);
})