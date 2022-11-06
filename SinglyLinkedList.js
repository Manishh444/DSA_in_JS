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
        this.tail = this.head;
        this.length = 0;
    }
    push(val){
        // create a node
        this.newNode = new Node(val);// NODE {val: 2; next: null}
        // check if list is empty 

        // how below if condition is working?

        // this.head will contain null and null is a falsy value so if contion will execute as contion evaluate to false
        // but then add !( not operator) will make this condition true
        if(this.head === null){//if(not null)
            this.head = this.newNode;// 
            this.tail = this.head;// both head and tail are now pointing to same object of Node class
        }
        // else modify current tail property and set new tail
        else{
            this.tail.next = this.newNode;// updating both head and tail next property as they still pointing to same object. this is true only for second element because after that tail will be updated and no longer point to same object as head
            // console.log("this is tail.next",this.tail.next);
            this.tail = this.newNode;
            // console.log("this is tail",this.tail);

        }
        // increase length by one everytime push method is called and executed
        this.length++;
        return this;
    }

    pop(){

        // if condition check if list is empty or not
        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        // while loop check for last node of list by two pointer pre and temp
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        // tail is updated to pre pointer value
        this.tail = pre;
        // tail's next property is updated to null
        this.tail.next = null;
        // length property is decremented by 1 each time 
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
}
let newList = new SinglyLinkedList();
// console.log(newList)
// newList.push(null)
newList.push("such")
// newList.push("touch")
// newList.push("much")

// newList.push("lavender")
// console.log(newList.head)
// console.log(newList.head.next.next)
// console.log(newList.tail)
console.log(newList)
newList.pop();
console.log(newList)