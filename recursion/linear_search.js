function linearSearch(A, n, x){
    if((A[n] === x) || (n < 0) ) return A[n];
    else return linearSearch(A, n-1, x);
}
