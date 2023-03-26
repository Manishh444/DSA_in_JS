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
    if(!this.length){
    this.head=null;
    this.tail=null;}
    return temp;
  }
  
   shift(){
    if(!this.head)return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--
    if(!this.length){
      this.tail=null;
    }
    return temp
  }
    unshift(value){
    const newNode = new Node(value); // create a new NODE
    if(!this.head){                     // check for edge case 1 if list is empty or not
      this.head = newNode;
      this.tail = newNode;
    }
    else{                             // if list is not empty then else condition is executed
    newNode.next = this.head;
    this.head = newNode;
    }
    this.length++
    return this;
  }
    get(index){
    if(index<0|| index>=this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while(counter<index){
      current=current.next;
      counter++;
    }
    return current;
  }
  set(index, value){
    let found = this.get(index);
    if(found){
      found.value = value;
      return true;
    }
    return false;
  }
    remove(index){
    if(index<0||index>this.length)return undefined;
    if(index===0)return this.shift();
    if(index===this.length-1)return this.pop()
    let temp = this.get(index);
    let before = this.get(index-1);
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
    insert(index, value){
    if(index<0||index>=this.length)return undefined;
    if(index===0)return this.unshift(value);
    if(index===this.length-1)return this.push(value);
    const newNode = new Node(value);
    let temp = this.get(index);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++
    return this;
  }
}

const newList = new SinglyLinkList();
