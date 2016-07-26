var arg = 10;
function tot ( n ) {
  if ( n <= 0 ) {
    return 0;
  }
  if ( n%3 === 0 || n %5 === 0 ) {
    return tot( n-1 ) + n;
  } 
  return tot( n-1 );
}
//if called from node.js, please supply argument
//console.log(process.argv);

//Provide default argument if not called from nodejs
if ( typeof parseInt( process.argv[ 2 ] ) === "number" ) {
  arg = parseInt( process.argv[ 2 ] );
}
console.log( tot( arg ) );
//9,8,7,6,5,4,3,2,1
