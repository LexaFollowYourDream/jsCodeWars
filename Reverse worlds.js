Complete the //function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

//Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке.
// Все пробелы в строке должны быть сохранены.

//Examples

//"This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let strReverse =  str.split("").reverse().join("").split(" ").reverse().join(" ");
    return strReverse;
}