// this is 
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        this.newNode = val;
        if(!this.head){
            this.head = this.newNode;
            this.tail = this.head
        }
        else{
            this.tail.next = this.newNode;
            this.tail = this.newNode
        }
        this.length++
        return this;
    }
}