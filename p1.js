function tot(n) {
  if ( n > 0 ) {
    if (n%3===0||n%5===0) {
//      console.log(n);
      return tot(n-1)+n;
    } 
    return tot(n-1);
  }
  return n;
}
//console.log(process.argv);
console.log(tot(parseInt(process.argv[2])));
//9,8,7,6,5,4,3,2,1
