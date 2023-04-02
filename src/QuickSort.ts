function qs(arr: number[], low: number, high: number): void {
  // example :: input = [4, 5, 2, 65, 1, 6], low = 0, high = 6;
  // base case
  if(low >= high) return;
  
  const pivotIndex = partition(arr, low, high);
  qs(arr, pivotIndex + 1, high ); // right
  qs(arr, low, pivotIndex - 1); // left 
  
}

function partition(arr: number[], low: number, high: number): number {
	
	const pivot = arr[high];
	let index =  low - 1;

	for(let i = low; i < high; i++){
		if(arr[i] <= pivot){
      index++;
			const temp = arr[index];
			arr[index] = arr[i];
			arr[i] = temp;
		}
	}

  index++;
  arr[high] = arr[index];
  arr[index] = pivot; 

	return index;
}

export default function quickSort(arr: number[]): void {
  qs(arr, 0, arr.length - 1)
}
