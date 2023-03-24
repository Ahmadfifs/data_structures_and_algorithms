export default function binarySearch(arr: number[], value: number): boolean {

	let low: number = 0; 
	let high: number = arr.length; 
	
	while(low < high){
		let middleIndex = Math.floor((low + high) / 2 );
		let middleValue = arr[middleIndex];

		if(middleValue == value){
			return true;
		} else if (value < middleValue){
			high = middleIndex - 1;
		} else {
			low = middleIndex + 1;
		}
	}
	
	return false;
}



console.log(binarySearch([1,2,3,4,5,6,7,8,9], 2))