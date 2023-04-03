import { expect, test } from "@jest/globals";
import BinaryTree from "../src/BinaryTree";

test("BTS", () => {

	const tree = new BinaryTree<number>();
	tree.add(10);
	tree.add(2);
	tree.add(5);
	tree.add(4)
	tree.add(1);
	
	expect(tree.breadthFirst()).toStrictEqual([10,2,5,4,1])
})