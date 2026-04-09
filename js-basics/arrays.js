/*
map() does NOT modify original array
It returns a new array

When you see map():

“Take each element → transform → store in new array”
*/

let arr=[1,2,3,4,5];
console.log(arr);

let result=arr.map(n => n*2);
console.log(result);

let arr1=[1,2,3];
let res=arr1.map(x => x+1);
console.log(res);

let arr2=[2,4,6];
let op=arr2.map( x=> x/2);
console.log(op);

let arr3=[1,2,3];
arr3.map(x=>x*2);
console.log(arr3);

/*
What filter() Does:
Takes array → returns only elements that satisfy condition

“Keep only those elements where condition is true”

filter() also does NOT modify original array
It returns a new array
*/

let arr4=[1,2,3,4,5];
let out=arr4.filter(n=>(n%2===0));
console.log(out);

let arr5=[1,2,3,4];
let outp=arr5.filter(n=>n>2);
console.log(outp);

let arr6 = [5,10,15];
let resp = arr6.filter(x => x < 10);
console.log(resp);

let arr7 = [1,2,3];
arr7.filter(x => x > 1);
console.log(arr7);

/*
What reduce() Does:
Takes array → reduces it to single value


*/

/*
syntax:
arr.reduce((acc, curr) => {
    // logic
}, initialValue);

Meaning:
Term    |   	Meaning
acc	    |   accumulator (stores result)
curr	|    current element
*/

let arr8=[1,2,3,4];
let sum=arr8.reduce((acc,curr)=> acc+curr,0);
console.log(sum);

/*
acc = 0
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
*/

let arr9=[1,2,3];
let mul=arr9.reduce((acc,curr)=>acc*curr,1);
console.log(mul);
//“Start with initial value → combine each element → get final result”

let arr0=[1,2,3];
let output=arr0.reduce((acc,curr)=>acc+curr);
console.log(output);
/*
Case	             |   Behavior
With initial value	 |   starts from that
Without initial	     |   first element becomes acc

0 is the initial value of accumulator, so summation starts correctly
*/