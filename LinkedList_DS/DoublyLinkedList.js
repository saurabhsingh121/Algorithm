class Node {
    constructor(value){
            this.value = value;
            this.next = null;
            this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        //assigning pointer for last node previous pointer
        newNode.prev = this.tail;
        //adding the new node to the last of its line
        this.tail.next = newNode;
        //updating the property of tail node
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        //assigning new node next pointer with the interim head node
        newNode.next = this.head;
        //assigning interim node previous pointer with the new node
        this.head.prev = newNode;
        //updating the head node with the new node
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

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        //getting the leader node
        const leader = this.traverseToIndex(index-1);
        //getting the next follower node
        const follower = leader.next;
        //assigning new node prev pointer with leader
        newNode.prev = leader;
        //then assigning the leader node next pointer with the new node
        leader.next = newNode;
        //assigning the follower node prev pointer with the new node
        follower.prev = newNode;
        //assigning the new node next pointer with the follower node
        newNode.next = follower;
        this.length++;
        return this;
    }

    remove(index){
        //getting the leader node
        const leader = this.traverseToIndex(index-1);
        //identifying the unwanted node
        const unwantedNode = leader.next;
        //taking the next follower node of wanted node
        const follower = unwantedNode.next;
        //assinging the follower node prev pointer with the leader
        follower.prev = leader;
        //assinging the leader node next poniter with the follower
        leader.next = follower;
        this.length--;
        return this;
    }
}

const myLinkedList = new DoublyLinkedList(5);
myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.prepend(30);
myLinkedList.insert(2, 99);
myLinkedList.insert(4, 88);
myLinkedList.remove(3);
console.log('====================================');
console.log(myLinkedList.printList());
console.log('====================================');