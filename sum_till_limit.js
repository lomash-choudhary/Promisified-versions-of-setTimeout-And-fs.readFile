function sum(n){
  let c = 0;
  for(let i = 1; i<=n; i++){
    c = c+i;
  }
  return c;
}
const a = sum(10);
console.log(a); 
const b = sum(100); 
console.log(b); 
const c = sum(1000);
console.log(c); 

