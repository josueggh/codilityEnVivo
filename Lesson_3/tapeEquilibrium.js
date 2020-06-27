function solution(A) {
  const N = A.length;
  const totalSum = [];
  totalSum.push(A[0]);
  for(let i = 1; i< A.length; i++) {
    totalSum.push(totalSum[i-1] + A[i])
  }
  // console.log(A);
  // console.log(totalSum)
  let min = Number.MAX_SAFE_INTEGER;
  const total = totalSum[totalSum.length - 1];
  for(let p = 0; p < N -1; p++) {
    const sumLeft = totalSum[p];
    const sumRight = total - sumLeft;
    const difference = Math.abs(sumRight - sumLeft);
    min = Math.min(min, difference);
  }
  return min;
}

const A = [3,1,2,4,3];
console.log(solution(A));