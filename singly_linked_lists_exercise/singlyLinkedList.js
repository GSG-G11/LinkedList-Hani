
function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(array = []) {
  this.head = null;
  this.tail = null;
  this.length = 0;

  if (Array.isArray(array)) {
    array.forEach((el) => {
      this.push(el);
    });
  }
}

SinglyLinkedList.prototype.push = function (val) {

  // if list is empty
  let node = new Node (val);
   if(this.head === null ){
       this.head = node;
       this.tail = this.head;
   }
   else{
     this.tail.next = node;
     this.tail = node;
   }
   this.length++;
   return this;
 
 }

SinglyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  let count = 0;
  let current = this.head;
  while(count < index){
    current = current.next;
    count++;
  }
    return current;
  
}


SinglyLinkedList.prototype.get = function (index) {
    let node = this.getNode(index)
     return node ? node.val : null;

}

SinglyLinkedList.prototype.pop = function () {
    if(!this.length){
      return undefined;
    }else{
      let previous = this.getNode(this.length-2);
      let deleteNode = previous.next;
      previous.next = null;
      this.tail = previous;
      this.length--;
      return deleteNode.val;   
  }
  }

SinglyLinkedList.prototype.unshift = function (val) {
  // insert at the beginning
  let node = new Node(val);

  if(this.head=== null){
    this.head = node;
  }else{
    node.next = this.head;
    this.head = node;
  }
  this.length++;
  return this;
}

SinglyLinkedList.prototype.shift = function () {

  if(!this.head){
    return undefined;
  }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;    
    this.length--;
    return temp.val;
}

SinglyLinkedList.prototype.insert = function (index, val) {
  if (index < 0 || index >= this.length) {
        return undefined;
  }
  let node = new Node(val);
  let current = this.head;
  let previous;
  let count = 0;
   while(count<index){
    previous = current;
    current = current.next;
    count++;
    }
  node.next = previous.next;
  previous.next = node;
  this.length++; 
  return this.length;
    
}

SinglyLinkedList.prototype.set = function (index, val) {
  
    let node = this.getNode(index);

    if(node){
      node.val = val;
      return true
    }
  return false;
}

SinglyLinkedList.prototype.remove = function (index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }
  let removedNode; 
  if(this.length === 1){
    removedNode = this.shift(index);
  }else{
    let current = this.head;
    let previous;
    let count = 0;

    while(count < index){
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    current.next = null;
    this.length--;
  
    return current;
  }
}

SinglyLinkedList.prototype.reverse = function () {
}

// SinglyLinkedList.prototype.reverse = function () {
//   let node = this.head;
//   let previousNode = null;

//   this.tail = this.head;

//   while (node) {
//     let tempNode = node.next;

//     node.next = previousNode;

//     previousNode = node;

//     node = tempNode;
//   }

//   this.head = previousNode;
// };


module.exports = SinglyLinkedList;