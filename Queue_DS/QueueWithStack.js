class QueueWithStack {
    constructor() {
        this.first = [];
        this.last = [];
    }

    //Whenever we are adding we are adding the array into the last and pushing the new element in it
    enqueue(value){
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }
    //whenever we are removing we are adding it into the first array and pop the element which basically added first in the first array and at the last in the last array
    dequeue(){
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
    }

    peek(){
        if(this.last.length > 0){
            return this.last[0];
        }
        return this.first[this.first.length -1];
    }
    
}

const myQueue = new QueueWithStack();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
//myQueue.enqueue('Pavel');
//console.log(myQueue.peek());
//myQueue.dequeue();
//myQueue.dequeue();
myQueue.dequeue();
// console.log(myQueue.peek());
console.log(myQueue);
