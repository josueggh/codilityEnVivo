// Binary Gap
function solution(N) {
    const  binary = N.toString(2);   
    let maxBinaryGap = 0;
    let hasGap = false;
    let localBinaryGap = 0;
    for(let i = 0; i < binary.length; i++ ){
        if (binary[i] === "1") {
          if (hasGap) {
            maxBinaryGap = Math.max(maxBinaryGap, localBinaryGap);
          }
          hasGap = true;
          localBinaryGap = 0;
        } else {
          localBinaryGap += 1;
        }
    }
    return maxBinaryGap;
}