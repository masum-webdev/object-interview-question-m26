const start=new Date();
let sum=0;
for (let i = 0; i < 100000000; i++) {
  sum = sum+i;
}
const end=new Date();
console.log(end-start,sum);