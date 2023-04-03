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

	expect(queue.length).toBe(3);
	expect(queue.tailValue()).toBe(2);
});

test("empty queue", () => {

	const queue = new Queue<number>();

	queue.enQueue(1);
	queue.enQueue(2);
	queue.enQueue(3);

	expect(queue.deQue()).toBe(1);
	expect(queue.length).toBe(2);
	queue.deQue();
	queue.deQue();

	expect(queue.length).toBe(0);
	expect(queue.peek()).toBe(undefined);
})


test("queue traverse", () => {
	const queue = new Queue<number>();

	queue.enQueue(1);
	queue.enQueue(2);
	queue.enQueue(3);


	expect(queue.traverse()).toStrictEqual([1,2,3]);


})