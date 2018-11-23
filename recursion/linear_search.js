let A = [1,2,3,4,5];
let n = A.length;
let x1 = 9;
let x2 = 3;

function linearSearch(A, n, x){
    if((A[n] === x) || (n < 0) ) return A[n];
    else return linearSearch(A, n-1, x);
}

console.log(linearSearch(A, n, x1)); // -1
console.log(linearSearch(A, n, x2)); // 2
