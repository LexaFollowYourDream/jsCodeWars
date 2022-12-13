//In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

//Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(n){
    let arr = n.split(" ")

    let min = arr[0];
    let max = arr[0];

    for (let i = 1 ; i < arr.length; i++ ){
        if ( min > +arr[i])  min = arr[i]
        if ( max < +arr[i])  max = arr[i]
    }

    return max + " " + min;
}