'use strict';

function reverseString(str) {
    if((!str) || (str.length < 2) || (typeof str !== 'string')){
        return 'Enter the valid string for reversal';
    }
    var result = '';
    for(var i = str.length-1; i >=0; i-- ){
        result += str[i];
    }
    return result;
    
}

function secondReverse(str) {
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "Enter the valid string for the reversal";
    }
    return str.split('').reverse().join('');
}

const thirdReverse = str => [...srt].reverse().join('');
console.log('====================================');
console.log(reverseString('My name is Saurabh Singh'));
console.log('====================================');
console.log('====================================');
console.log(secondReverse('My name is Khan and I  not a terrorist'));
console.log('====================================');
console.log('====================================');
console.log(thirdReverse('Dekha ek khwab to ye silsile'));
console.log('====================================');