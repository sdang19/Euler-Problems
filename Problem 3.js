var number = 600851475143  ;
var pf = [];
var largestPrime;


/**
 * Check to see if the number is a Prime Number
 * @param  {int}  num 
 * @return {Boolean}     
 */
var isPrime = function(num){
    for(var i = 2; i<num;i++){
        if(num%i===0){
            return false;
        }
    }
        return true;
};

/**
 * Factor the Number function by finding the smallest factors
 * @param  {int} num 
 * @return {array}     Return the the list of Prime Factors
 */
var factor = function(num){
    for(var i = 2; i<num+1; i++){
        //console.log(i + ' ' + num);
        if(num%i===0 && isPrime(i)){
            pf.push(i);
            num = num/i;
            i = 1;
            //console.log('pf :' + pf + '  num: '+ num);
        }
    }
};

//Main function
if(isPrime(number)){
    pf.push(number);
}
else{
    factor(number);
}

console.log('Factors: '+ pf);
largestPrime = pf[pf.length-1];
console.log('Largest Prime Factor is: '+largestPrime);