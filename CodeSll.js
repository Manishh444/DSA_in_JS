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
}
