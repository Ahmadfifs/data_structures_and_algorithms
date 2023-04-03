import { expect, test } from "@jest/globals";
import BinaryTree, { TNode } from "../src/BinaryTree";
import compareBinaryTree from "../src/CompareBinaryTree";




test("valid trees", () => {
	const tree = new BinaryTree<number>();
	const tree2 = new BinaryTree<number>();

	tree.add(3);
	tree.add(2);
	tree.add(1);
	tree.add(5);
	tree.add(4);


	tree2.add(3);
	tree2.add(2);
	tree2.add(1);
	tree2.add(5);
	tree2.add(4);

	expect(compareBinaryTree(tree.root as TNode<number>, tree2.root as TNode<number>)).toBe(true);
});


test("inValid trees", () => {
	const tree = new BinaryTree<number>();
	const tree2 = new BinaryTree<number>();

	tree.add(3);
	tree.add(1);
	tree.add(5);
	tree.add(4);


	tree2.add(3);
	tree2.add(2);
	tree2.add(1);
	tree2.add(5);
	tree2.add(4);

	expect(compareBinaryTree(tree.root as TNode<number>, tree2.root as TNode<number>)).toBe(false);
})

test("null trees", () => {
	const tree = new BinaryTree<number>();
	const tree2 = new BinaryTree<number>();

	expect(compareBinaryTree(tree.root as TNode<number>, tree2.root as TNode<number>)).toBe(true);
})


