function firstRecurringChar(arr) {
    let i = 0;
    const mySet = new Set();
    while(i < arr.length){
        if(mySet.has(arr[i])){
            return arr[i]
        }
        mySet.add(arr[i]);
        i++;
    }
    return undefined;
}


console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringChar([2, 3, 4, 5]));

