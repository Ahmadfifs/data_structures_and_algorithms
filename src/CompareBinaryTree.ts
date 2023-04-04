import BinaryTree, { TNode } from "./BinaryTree";


export default function compareBinaryTree(node1: TNode<number>, node2: TNode<number> ): boolean {

	// depth fisrt search will maintain the structude of tree 
	// so if we want to compare the two trees you should use depth first 

	// base case
	// structrual check 
	if(node1 == null && node2 == null){
		return true;
	}

	// structrual check 
	if(node1 == null || node2 == null){
		return false;
	}

	// value check
	if(node1.value  !== node2.value ){
		return false;
	}



	return compareBinaryTree(node1.left as TNode<number> , node2.left as TNode<number>) && compareBinaryTree(node1.right as TNode<number> , node2.right as TNode<number>);
}