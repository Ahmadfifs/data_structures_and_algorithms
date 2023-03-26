import { test, expect } from "@jest/globals";
import Queue from "../src/Queue";



test("enqueue", () => {
	const queue = new Queue<number>();
	queue.enQueue(1);
	queue.enQueue(1);
	queue.enQueue(2);

	expect(queue.length).toBe(3);
	expect(queue.deQue()).toBe(1);
});



test("test", () => {
	const queue = new Queue<number>();
	queue.enQueue(1);
	queue.enQueue(1);
	queue.enQueue(2);

	expect(queue.tailValue()).toBe(2);
});

test("empty queue", () => {

	const queue = new Queue<number>();

	queue.enQueue(1);
	queue.enQueue(2);
	queue.enQueue(3);

	queue.deQue();
	queue.deQue();
	queue.deQue();

	expect(queue.peek()).toBe(undefined);
})