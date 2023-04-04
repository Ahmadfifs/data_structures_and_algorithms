import { expect, test } from "@jest/globals";
import BinaryTree, { TNode } from "../src/BinaryTree";

test("BTS", () => {

	const tree = new BinaryTree<number>();
	tree.add(10);
	tree.add(2);
	tree.add(5);
	tree.add(4)
	tree.add(1);
	
	expect(tree.breadthFirst()).toStrictEqual([10,2,1,5,4])
})


test("find element", () => {

	const tree = new BinaryTree<number>();
	tree.add(10);
	tree.add(2);
	tree.add(5);
	tree.add(4)
	tree.add(1);
	
	expect(tree.findElemetn(1)).toBe(true)
	expect(tree.findElemetn(11)).toBe(false)
})

test("delete", () => {

	const tree = new BinaryTree<number>();
	tree.add(5);
	tree.add(2);
	tree.add(6);
	tree.add(8);
	tree.add(4)
	tree.add(1);

	tree.delete(2);

	
	expect(tree.breadthFirst()).toStrictEqual([5,1,6,4,8]);
})


