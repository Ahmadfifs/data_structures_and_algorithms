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
			this.tail = node;
			this.head = node;
			return;
		}

		if(this.head == this.tail){
			this.head.next = node;
		}

		this.tail.next = node;
		this.tail = node;
	}
	


	deQue(): T | undefined{
		if(!this.head){
			return undefined;
		}

		this.length--;
		const value = this.head.value;
		this.head = this.head.next;
		return value;
	}


	peek(): T | undefined {
		return this.head?.value;
	}

	tailValue(): T | undefined {
		return this.tail?.value;
	}


	traverse(): T[] {
		const arr: T[] = [];

		while(this.head){
			arr.push(this.head.value);
			this.head = this.head.next;
		}

		return arr;
	}
	

}