import Queue from "./Queue";

class TNode<T> {
	value: T;
	left?: TNode<T>;
	right?: TNode<T>;

	constructor(value: T){
		this.value = value;
	};
}


export default class BinaryTree<T> {

	private root?: TNode<T>;
	private length: number;

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


	findElemetn(value: T) {
		return this.findElementRecursion(this.root as TNode<T> ,value);
	}

	private findElementRecursion(node: TNode<T>, value: T): TNode<T> | undefined {
		// base case 1
		if(!node){
			return undefined;
		}

		// base case 2
		if(node.value == value){
			return node;
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
		// we need queue
		const queue: TNode<T>[] = [];
		
		queue.unshift(this.root as TNode<T>)
		const values: T[] = [];

		while(queue.length){
			const node = queue.shift();
			if(!node){
				continue;
			}

			values.push(node.value as T);
			
			
			if(node.left){ 
				queue.unshift(node.left);
			}
			if(node.right){ 
				queue.unshift(node.right);
			}

		}

		return values;
	}


}
