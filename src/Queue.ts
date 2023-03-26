type QNode<T> = {
	value: T,
	next?: QNode<T>
};



export default class Queue<T> {
	public length: number;
	private head?: QNode<T> ;
	private tail?: QNode<T>;

	constructor(){
		this.head = this.tail = undefined;
		this.length = 0;
	};


	enQueue(value: T){
		this.length++;
		const node = { value } as QNode<T>;
		if(!this.tail){
			this.tail = this.head = node;
			return;
		}

		node.next = this.tail;
		this.tail = node;
	}
	


	deQue(): T | undefined{
		if(!this.head){
			return undefined;
		}

		this.length--;
		const head = this.head;
		this.head = this.head.next;
		return head.value;
	}


	peek(): T | undefined {
		return this.head?.value;
	}

	tailValue(): T | undefined {
		return this.tail?.value;
	}
	

}