export default function twoCrystalBalls(arr: boolean[]): number {

	const jumpAmount: number = Math.floor(Math.sqrt(arr.length));
	let i = jumpAmount;
	let breakIndex: number = 0;

	for(; i < arr.length; i += jumpAmount){
		if(arr[i]){
			breakIndex = i;
			break;
		}
	}

	i -= jumpAmount;
	for(i -= jumpAmount; i <= breakIndex;  i++){
		if(arr[i]){
			return i;
		}
	}

	return -1;
}