//We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed,
// gives the original number n. For example consider number 1729:
//
// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number,
// and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.

function numberJoy(n) {
    let arr =  n.toString().split('')
    let sum = 0;

    for ( let i = 0; i < arr.length; i++ ){
        sum += +arr[i]
    }

    let sumRevers =  sum.toString().split('').reverse().join('')
    if ( sum * +sumRevers == n) return true;
    else{
        return false
    }

}