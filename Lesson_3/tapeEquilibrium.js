function solution(A){
	const reducer = (accumulator, currentValue) => accumulator + currentValue; 
	let MIN = Infinity;

	for(let i= 1; i <  A.length; i++){
		let left = A.slice(0, i).reduce(reducer);
		let right = A.slice(i).reduce(reducer);
		let result = Math.abs(left - right);
		if(result < MIN  ){
			MIN = result;
		}
	}
	return MIN;
}
const A = [3,1,2,4,3];
console.log(solution(A));
