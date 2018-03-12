'use strict';

// var a = [];
// for (let i = 0; i < 10; i++) {
// 	a[i] = function () {
// 		console.log(i);
// 	}
// }
// a[6]();

// for (let i = 0; i < 10; i++) {
// 	let i = 'abc';
// 	console.log(i);
// }
// console.log(i);

// function f1() {
// 	let n = 6;
// 	if(true){
// 		let n = 3;
// 		console.log(n)
// 	}
// 	console.log(n)
// }
// f1();
// let [a, b, c] = [1, 2, 3]
// console.log(a);
// console.log(b);
// console.log(c);

// let s = 'hello world!'
// console.log(s.includes('ll'));
// console.log(s.startsWith('hel'));
// console.log(s.endsWith('!'));
// console.log(s.endsWith('ll'));

// console.log('x'.repeat(3));

// const [a,b] = ['a','bc'];

// console.log(a.padStart(3, b));
// console.log(a.padEnd(3, b));
// console.log(a.padEnd(3));

// console.log(parseInt(12.123));
// console.log(Number.parseInt(12.123));

// function add(...values) {
// 	let sum = 0;
// 	for(var val of values) {
// 		sum += val;
// 	}
// 	return sum;
// }
// console.log(add(1,2,3));

// function s(x,y = 2){
// 	console.log(x);
// 	console.log(y);
// }
// s(1);
// var x = y => y;
// console.log(x(1));

// var sum = (s1,s2) => {return s1+s2};
// console.log(sum (2, 3));

// var sum = (...values) => values;
// console.log(sum(1,2.3,3)); 

// function f(n,t=1) {
// 	if (n===1) return t;
// 	return f(n-1,n*t);
// }

// console.log(f(5));

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// console.log(Math.max(...arr1));
// console.log(Math.min(...arr2));
// arr1.push(...arr2)
// console.log(arr1);

var arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

console.log(Array.from(arrayLike));
console.log(Array.from('Hello'));
console.log(Array.from([1, 2, 3], function (x) {
  return x * x;
}));