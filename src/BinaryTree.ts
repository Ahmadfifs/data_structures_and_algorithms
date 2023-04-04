export class TNode<T> {
	value: T;
	parent?: TNode<T>;
	left?: TNode<T>;
	right?: TNode<T>;

	constructor(value: T){
		this.value = value;
	};
}


export default class BinaryTree<T> {

	root?: TNode<T>;
	length: number;

	constructor(){
		this.length = 0;
	};


	add(value: T){
		this.root = this.addRecursion(this.root as TNode<T>, value);
	}
	
	private addRecursion(node: TNode<T>, value: T): TNode<T> {
		
		// base case
		if(!node){
			this.length++
			return new TNode<T>(value);
		}

		if(value < node.value){
			node.left = this.addRecursion(node.left as TNode<T>, value);
		} else if (value > node.value) {
			node.right = this.addRecursion(node.right as TNode<T>, value)
		} 

		return node;
	}


	delete(value: T){
		this.root = this.deleteRecurstion(this.root, value);
	}

	deleteRecurstion(node: TNode<T> | undefined, value: T): TNode<T> | undefined{
		
		// base case: the value is not found in the tree
        if (node == undefined) {
            return undefined;
        }
 
        // if the given value is less than the node node, recur for the left subtree
        if (value < node.value) {
            node.left = this.deleteRecurstion(node.left, value);
        } 
		// if the given value is more than the node node, recur for the right subtree
		else if (value > node.value) { 
            node.right = this.deleteRecurstion(node.right, value);
        }
 
        // value found
        else {
            // Case 1: node to be deleted has no children (it is a leaf node)
            if (node.left == undefined && node.right == undefined)
            {
                // update node to null
                return undefined;
            }
 
            // Case 2: node to be deleted has two children
            else if (node.left != null && node.right != null)
            {
                // find its inorder predecessor node
				//? you can choise predecessor ( max of left ) or successor ( min of the right)
				//? let successor = this.getMinimumKey(node.right);
                let predecessor = this.getMaximumKey(node.left);
 
                // copy value of the predecessor to the current node
                node.value = predecessor.value;
 
                // recursively delete the predecessor. Note that the
                // predecessor will have at most one child (left child)
                node.left = this.deleteRecurstion(node.left, predecessor.value);
            }
 
            // Case 3: node to be deleted has only one child
            else {
                // choose a child node
                let child = (node.left != null) ? node.left: node.right;
                node = child;
            }
        }
 
        return node;		
	}

	private getMinimumKey(node: TNode<T>){
		let current = node;

		while(current.left){
			current = current.left;
		}

		return current;
	}

	private getMaximumKey(node: TNode<T>){

        while (node.right != null) {
            node = node.right;
        }

        return node;
    }


	findElemetn(value: T) {
		return this.findElementRecursion(this.root as TNode<T> ,value);
	}

	private findElementRecursion(node: TNode<T>, value: T): boolean {
		// base case 1
		if(!node){
			return false;
		}

		// base case 2
		if(node.value == value){
			return true;
		}

		return value < node.value 
		? this.findElementRecursion(node.left as TNode<T>, value)
		: this.findElementRecursion(node.right as TNode<T>, value)
	}


	traverse(){
		return this.traverseRecursion(this.root as TNode<T>, []);
	}


	traverseRecursion(node: TNode<T>, values: T[]){
		// base case 
		if(!node){
			return values;
		}

		
		// push node value and recuese 
		values.push(node.value); //* in order

		this.traverseRecursion(node.left as TNode<T>, values);

		// values.push(node.value); //* post order the result will be order array

		this.traverseRecursion(node.right as TNode<T>, values);

		return values;
		
	}

	breadthFirst(){
		// Init Queue
		const queue: TNode<T>[] = [];

		queue.push(this.root as TNode<T>)
		const values: T[] = [];

		while(queue.length){
			const node = queue.shift();
			if(!node){
				continue;
			}
			
			if(node.left){ 
				queue.push(node.left);
			}
			
			if(node.right){ 
				queue.push(node.right);
			}
			
			values.push(node.value as T);
		}

		return values;
	}

}	