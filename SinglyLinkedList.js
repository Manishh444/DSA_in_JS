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
        this.newNode = new Node(val);// NODE {val: 2; next: null}
        // check if list is empty 
        if(!this.head){//if(not null)
            this.head = this.newNode;
            this.tail = this.head;
        }
        // else modify current tail property and set new tail
        else{
            this.tail.next = this.newNode;
            // console.log("this is tail.next",this.tail.next);
            this.tail = this.newNode;
            // console.log("this is tail",this.tail);

        }
        // increase length by one everytime push method is called and executed
        this.length++;
        return this;
    }
}
let newList = new SinglyLinkedList();
// console.log(newList)
// newList.push(null)
newList.push("such")
newList.push("touch")
// newList.push("much")

// newList.push("lavender")
// console.log(newList.head)
// console.log(newList.head.next.next)
// console.log(newList.tail)
console.log(newList)