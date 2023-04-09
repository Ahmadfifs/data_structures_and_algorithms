class Node<T> {
	value!: T;
	next?: Node<T>;
	prev?: Node<T>;

	constructor(value: T){
		this.value = value;
	}
}

export default class LRU<K,V> {
	private length: number = 0;
	private head?: Node<V>;
	private tail?: Node<V>;	
	private lookop = new Map<K, Node<V>>();
	private reverseLookop = new Map<Node<V>, K>();
	private capacity: number;

	constructor(capacity: number){
		this.capacity = capacity;
	}

	update(key: K, value: V){

		// check if the value is exist 
		let node = this.lookop.get(key);
		if(!node){
			node = new Node(value);
			this.length++;
			this.prepend(node);
			this.trimCache();

			this.lookop.set(key, node);
			this.reverseLookop.set(node, key);
		} else {
			this.detach(node);
			this.prepend(node);
			node.value = value;
		}

	};


	get(key: K){
		// check if the value is exist 
		const node = this.lookop.get(key);
		if(!node) return false;

		this.detach(node);
		this.prepend(node);

		return this.head;
	}

	private detach(node: Node<V>){
		
		if(node.prev){
			node.prev.next = node.next;
		}

		if(node.next){
			node.next.prev = node.prev;
		}

		if(this.head == node){
			this.head = this.head.next;
		}

		if(this.tail == node){
			this.tail = this.tail.prev;
		}

		node.next = undefined;
		node.prev = undefined;

	}

	private prepend(node: Node<V>){
		if(!this.head){
			this.head = this.tail = node;
		}

		node.next = this.head;
		this.head.prev = node;
		this.head = node;
	}

	private trimCache(){
		if(this.length <= this.capacity){
			return;
		}


		const tail = this.tail as Node<V>
		this.detach(tail);

		const key = this.reverseLookop.get(tail) as K;
		this.lookop.delete(key)
		this.reverseLookop.delete(tail);
	}

}