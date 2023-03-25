export default function binarySearch(arr: number[], value: number): boolean {

	let low: number = 0; 
	let high: number = arr.length - 1; 
	
	while(low <= high){
		let middleIndex = Math.floor((low + high) / 2 );
		let middleValue = arr[middleIndex];

		if(middleValue == value){
			return true;
		} else if (value < middleValue){
			high = middleIndex  - 1;
		} else {
			low = middleIndex + 1;
		}
	}
	
	return false;
}
