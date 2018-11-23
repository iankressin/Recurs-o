function linearSum(n){
    if(n == 0) return n;
    else return n + linearSum(n-1);
}

console.log(linearSum(5)); // 15