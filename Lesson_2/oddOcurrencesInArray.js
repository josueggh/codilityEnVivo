function solution(A) {
  const tracker = new Map();
  for(let i =0; i< A.length; i++) {
    const exists = tracker.get(A[i]);
    tracker.set(A[i], !exists);
  }
  for(var [key, value] of tracker) {
    if (value) {
      return key;
    }
  }
  return 0;
}

const A = [9, 3, 9, 3, 9, 7, 9]
console.log(solution(A));


