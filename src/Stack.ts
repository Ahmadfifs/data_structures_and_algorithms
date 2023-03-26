type SNode<T> =  {
	value: T,
	prev?: SNode<T>,
};


export default class Stack<T> {
	length: number;
	head?: SNode<T>;
	
	constructor(){
		this.length = 0;
		this.head = undefined;
	};

	push(value :T){
		const node = { value } as SNode<T>;
		this.length++;
		if(!this.head){
			this.head = node;
			return;
		}

		node.prev = this.head;
		this.head = node;
	};


	pop(): T | undefined{
		if(!this.head){
			return undefined;
		};
		this.length--;
		const current = this.head;
		this.head = this.head?.prev;
		return current.value;
	}


	peek(): T | undefined {
		return this.head?.value;
	}
}