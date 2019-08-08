class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList {
     constructor(value) {
        //  this.head = {
        //      value: value,
        //      next: null
        //  };
        this.head = new Node(value);
         this.tail = this.head;
         this.length = 1;
     }

     append(value) {
        const newNode = new Node(value)

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
     }

     prepend(value) {
         const newNode = new Node(value);
         newNode.next = this.head;
         this.head = newNode;
         this.length++;
         return this;
     }

     printList() {
         const array = [];
         let currentNode = this.head;
         while(currentNode !== null){
             array.push(currentNode.value);
             currentNode = currentNode.next;
         }
         return array;
     }

     insert(index, value){
         //check params
         if(index >= this.length) {
            return this.append(value);
         }
         const newNode = new Node(value);
         const leader = this.traverseToIndex(index-1);
         const holdingPointer = leader.next;
         leader.next = newNode;
         newNode.next = holdingPointer;
         this.length++;
         return this;
     }

     traverseToIndex(index){
         let counter = 0;
         let currentNode = this.head;
         while(counter !== index){
             currentNode = currentNode.next;
             counter++;
         }

         return currentNode;
     }

     remove(index){
         const leader = this.traverseToIndex(index-1);
         const unwantedNode = leader.next;
         leader.next = unwantedNode.next;
         this.length--;
         return this;
     }

     reverse() {
        if(!this.head.next){
            return this;
        }
        //assigning the head to one first variable
        let first = this.head;
        //assuming that the now head will end up being tail at the end, so assigning the value
        this.tail = this.head;
        //taking second node to the first node
        let second = first.next;
        while(second){
            //taking a temp/thrid variable the second node
            const temp = second.next;
            //assigning the first node to the third position
            second.next = first;
            //moving the second node to the first node
            first = second;
            //now moving the third node to the second
            second = temp;
        }
        //atlast, assuming that the first node will be at last and will be referencing to no node
        this.head.next = null;
        //now assigning the head node with the current first node
        this.head = first;

        return this;
    }
}

const myLinkedList = new LinkedList(5);
myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.prepend(30);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(3);
console.log('====================================');
console.log(myLinkedList.printList());
console.log('====================================');
myLinkedList.reverse();
console.log(myLinkedList.printList());
