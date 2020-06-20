// Solucion 1
function solution1(A, K) {
  const N = A.length;
  K = K % N;
  if (K === 0) { return A; }
  const res = [];
  for(let i = 0; i < N; i++) {
      const pos = (N - K + i) % N;
      res.push(A[pos]);
  }
  return res;
}

// Solucion 2
function solution2(A, K) {
  const N = A.length;
  if ( N === 0 ) { return A; }
  K = K % N;
  A.reverse();
  const first = A.slice(0, K).reverse();
  const second = A.slice(K, N).reverse();
  return first.concat(second);
}

// console.log(solution1([4, 5, 7, 9, 5], 2));  
// console.log(solution2([4, 5, 7, 9, 5], 2));  