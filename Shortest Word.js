//Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.


//Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).
//
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.


function findShort(s){
    const arr = s.split(" ")
    arr.sort((a, b) => a.length - b.length)
    let res = arr[0]
    return res.length;
}