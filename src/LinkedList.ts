class Linked<T> {
	element: T;
	next: Linked<T> | null = null;

	constructor(element: T){
		this.element = element;
	};

}


export default class LinkedList<T> {
	head: Linked<T> | null = null;
	len: number = 0;

	append(value: T): void {
		if(this.head == null){
			this.head = new Linked<T>(value);
			return;
		}
		let current  = this.head;
		while(current.next){
			current = current.next;
		}
		current.next =	new Linked<T>(value);
		
	};

	delete(value: T): boolean {
		if(this.head == null) return false;

		if(this.head.element == value){
			this.head = this.head.next;
			return true;
		}

		let current = this.head.next;
		let previous = this.head;
		while(current){
			if (current.element == value){
				previous.next = current.next;
				return true;
			}
			previous = current;
			current = current.next;
		}
		return false;
	}

	search(value: T): T | null {
		let current = this.head;

		while(current){
			if (current.element == value){
				return value;
			}
			current = current.next;
		}

		return null;
	}


	traverse(): T[] {
		let arr: T[]  = [];
		let current = this.head;
		while(current){
			arr.push(current.element);
			current = current.next;
		}
		return arr;
	}
};