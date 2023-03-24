//Node class create individual instance of itself and is independent.
//singlyLinkList
class Node{
  constructor(value){
  this.value=value;
    this.next=null;
  }
}
// SinglyLinkList class create 
class SinglyLinkList{
  constructor(){
  this.head = null;
    this.tail = this.head;
    this.length = 0;
  }
   push(value){
    const node = new Node(value)
    if(!this.head){
      this.head = node;
        this.tail=node;
    }
     else{
     this.tail.next = node;
       this.tail = node;
     } 
       this.length++;
       return this;
   }
  pop(value){
  if(!this.head){
  return undefined;
  }
  const temp = this.head;
  const pre = this.head;
    while(temp.next){
    pre = temp.next;
      temp = temp.next
    }
    this.tail=pre;
    this.tail.next=null;
    this.length--;
    return this
  }
}

const newList = new SinglyLinkList();
