import { test, expect } from "@jest/globals";
import LinkedList from "../src/LinkedList";



test("create object", () => {
	let link = new LinkedList<string>();
	expect(link.head).toBe(null);
	expect(link.head?.element).toBe(undefined);
})


test("append", () => {
	let link = new LinkedList<number>();
	link.append(1);
	link.append(2);
	link.append(3);

	expect(link.traverse()).toStrictEqual([1,2,3]);
})


test("search pass", () => {
	let link = new LinkedList<number>();
	link.append(1);
	link.append(2);
	link.append(3);

	expect(link.search(3)).toBe(3);
})

test("search fail", () => {
	let link = new LinkedList<number>();
	link.append(1);
	link.append(2);
	link.append(3);

	expect(link.search(10)).toBe(null);
})

test("delete", () => {
	let link = new LinkedList<number>();
	link.append(1);
	link.append(2);
	link.append(3);

	expect(link.delete(2)).toBe(true);
});

