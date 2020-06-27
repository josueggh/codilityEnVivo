function solution(A) {
  const N = A.length;
  const fullSum = (N + 1) * (N + 2) / 2;
  let actualSum = 0;
  A.forEach(elem => actualSum += elem);
  return fullSum - actualSum;
}

const A = [2, 3, 1, 5];   
console.log(solution(A));