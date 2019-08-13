class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        //getting the first element of the queue
        return this.first;
    }

    enqueue(value) {
        //instantiating the node
        const newNode = new Node(value);
        //if this is the first entry
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            //adding our new node to the last node
            this.last.next = newNode;
            //now updating the last node as new node
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        //if we remove the very single node of the queue
        if(this.first === this.last){
            this.last = null;
        }
        //removing first node and assigning the following node ot the first place
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue('google');
myQueue.enqueue('microsoft');
myQueue.enqueue('amazon');
myQueue.enqueue('facebook');
//myQueue.dequeue();
console.log(myQueue);

