class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Stack {
    constructor(value){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        //getting the first element of the stack
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        //if this is first entry
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            //getting the interim records in holder pointer
            const holdingpointer = this.top;
            //assigning new node to the top node
            this.top = newNode;
            //assigning the interim node to the next of the top node
            this.top.next = holdingpointer;
        }
        this.length++;
        return this;
    }

    pop(){
        //returning null if there is no element
        if(!this.top){
            return null;
        }
        //if there is only one record, then setting bottom node as null
        if(this.top === this.bottom){
            this.bottom = null;
        }
        //assinging the following node of top to the top itself,
        //and thus removing the interim top node
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.pop();
console.log(myStack);

