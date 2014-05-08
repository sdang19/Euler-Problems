//Problem 2: Fibonacci Sequence whose values do not exceed four million, find the sum of the even valued terms

var fib = [1,2];
var even = 0;

//create Fib Sequence
while(fib[fib.length-1]<4000000){
	var sum;
	sum = fib[fib.length-2]+fib[fib.length-1];
	fib.push(sum);
}

//sum of all even numbers

for(var i = 0; i<fib.length; i++){
	if(fib[i]%2===0){
		even = even +fib[i];
	}

}
console.log(even);