export class Heap{
	length: number;
	data: number[];
	
	constructor(){
		this.length = 0 ;
		this.data = [];
	}



	insert(value: number){ // O(log n)
		this.data[this.length] = value;
		this.heapifyup(this.length);
		this.length++;
	}

	delete(){ // O(log n)
		if(this.length == 0){
			return undefined;
		}

		const out = this.data[0];
		this.length--;
		// there is only one element in the heap
		if(this.length == 0){
			this.data = [];
			return out;
		}
		
		// swap head with tail 
		this.data[0] =  this.data[this.length]; // remove the root 
		this.heapifyDown(0);
		this.data.pop();

		return out;
	}

	private heapifyDown(index: number){
		if(index >= this.length){
			return;	
		}

		const lIndex = this.leftChild(index);
		const rIndex = this.rightChild(index);
		const v = this.data[index];
		const rV  = this.data[rIndex];
		const lV = this.data[lIndex];

		if(lV > rV && v > rV){
			// the right element it the smallest 
			// swap the right with current and call heapifyDown on new value 
			this.data[index] = rV;
			this.data[rIndex] = v;
			this.heapifyDown(rIndex);
		} else if (lV < rV && v > lV){
			// the left child is the smallest
			// swap the left with currnet and call heayifyDown on new value
			this.data[index] = lV;
			this.data[lIndex] = v;
			this.heapifyDown(lIndex);
		}



		

	}

	private heapifyup(index: number){
		if(index == 0){
			return;
		}

		const parentIndex = this.parent(index);
		const parentValue = this.data[parentIndex];
		const value = this.data[index];

		if(value < parentValue){
			this.data[parentIndex] = value;
			this.data[index] = parentValue;
			this.heapifyup(parentIndex);
		}

	}

	private parent(index: number){
		return Math.floor((index - 1) / 2);
	}

	private leftChild(index: number){
		return index * 2 + 1;
	}


	private rightChild(index: number){
		return index * 2 + 2;
	}

	print(): number[] {
		return this.data.slice(0, this.length);
	}

}
