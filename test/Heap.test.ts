import { expect, test } from "@jest/globals";
import { Heap } from "../src/Heap";



test("heap length", () => {

	let minHeap = new Heap();

	minHeap.insert(10);
	minHeap.insert(5);
	minHeap.insert(9);
	minHeap.insert(7);
	minHeap.insert(4);
	minHeap.insert(11);
	minHeap.insert(3);
	minHeap.insert(0);


	expect(minHeap.length).toBe(8);	

})


test("heap print", () => {

	let minHeap = new Heap();

	minHeap.insert(10);
	minHeap.insert(5);
	minHeap.insert(9);
	minHeap.insert(7);
	minHeap.insert(4);
	minHeap.insert(11);
	minHeap.insert(3);
	minHeap.insert(0);


	expect(minHeap.print()).toStrictEqual([0,3,4,5,7,11,9,10]);

})

test("heap delete", () => {

	let minHeap = new Heap();

	minHeap.insert(10);
	minHeap.insert(5);
	minHeap.insert(9);
	minHeap.insert(7);
	minHeap.insert(4);
	minHeap.insert(11);
	minHeap.insert(3);
	minHeap.insert(0);

	minHeap.delete();
	expect(minHeap.print()).toStrictEqual([3,5,4,10,7,11,9]);

})
