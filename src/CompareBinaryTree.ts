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


const tree = new BinaryTree<number>();
const tree2 = new BinaryTree<number>();


tree.add(3);
tree.add(2);
tree.add(1);
tree.add(5);
tree.add(4);


tree2.add(3);
tree2.add(2);
tree2.add(11);
tree2.add(5);
tree2.add(4);

console.log(compareBinaryTree(tree.root as TNode<number>, tree2.root as TNode<number>))

