import { it } from "@jest/globals";

export class Node<T> {
	data: T;
	adjacent: Node<T>[];
  
	constructor(data: T) {
	  this.data = data;
	  this.adjacent = [];
	}
  
	addAdjacent(node: Node<T>): void {
	  this.adjacent.push(node);
	}
}

export default class Graph<T> {
	nodes: Map<T, Node<T>> = new Map();


	addNode(data: T){
		// check if the node exist 
		let node = this.nodes.get(data);
		if(node) return node;

		// create new node
		node = new Node(data);
		this.nodes.set(data, node);
		return node;
	}

	addEdge(sourse: T, destination: T){
		const sourseNode = this.addNode(sourse);
		const destinationNode = this.addNode(destination);

		sourseNode.addAdjacent(destinationNode);
	}



	private breadthFirstSearchHelper(node: Node<T>, visited: Map<T, boolean>){
		const queue = [node];
		visited.set(node.data, true);

		while(queue.length){
			node = queue.shift() as Node<T>;
			
			if(!node) continue;
			console.log(node.data);

			node.adjacent.forEach(item => {
				if(!visited.has(item.data)){
					visited.set(item.data, true);
					queue.push(item);
				};
			})
			
		}
	};

	breadthFirstSearch(): void{
		const visited: Map<T, boolean> = new Map();
		this.nodes.forEach(node => {
			if(!visited.has(node.data)){
				this.breadthFirstSearchHelper(node, visited);
			}
		});
	}


	private depthFirstSearchHelper(node: Node<T>, visited: Map<T, boolean>){
		if(!node) return;
		visited.set(node.data, true);

		console.log(node.data);

		node.adjacent.forEach(item => {
			if(!visited.has(item.data)){
				this.depthFirstSearchHelper(item, visited);
			}
		});
	};

	depthFirstSearch(){
		const visited: Map<T, boolean> = new Map();
		this.nodes.forEach(item => {
			if(!visited.has(item.data)){
				this.depthFirstSearchHelper(item,visited);
			};
		});
	};


}



const g = new Graph<string>();

g.addEdge('a', 'c');
g.addEdge('b', 'a');
g.addEdge('b', 'd');
g.addEdge('c', 'e');
g.addEdge('d', 'c');

console.log(g.breadthFirstSearch());
console.log('----------------------------------------');
console.log(g.depthFirstSearch());