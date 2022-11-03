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
        // create a node
        this.newNode = new Node(val);
        // check if list is empty 
        if(!this.head){
            this.head = this.newNode;
            this.tail = this.head
        }
        // else modify current tail property and set new tail
        else{
            this.tail.next = this.newNode;
            this.tail = this.newNode
        }
        // increase length by one everytime push method is called and executed
        this.length++;
        return this;
    }
}
let newList = new SinglyLinkedList();
// console.log(newList.push("kuch"))
newList.push("kuch")
newList.push("such")
newList.push("much")
console.log(newList)