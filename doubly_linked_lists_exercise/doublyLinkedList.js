function Node(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(array = []){
    this.head = null;
    this.tail = null;
    this.length = 0;

    if(Array.isArray(array)){
        array.forEach(el => {
            this.push(el);
        });
    }
}

DoublyLinkedList.prototype.push = function(val){

    // if linked list is empty
    let node = new Node(val);
    if(this.head === null ){
        this.head = node;
        this.tail = this.head;
    }
    else{
       this.tail.next = node;
       node.prev = this.tail;
       this.tail = node;
    }
    this.length++;

    return this;
    
    
}

DoublyLinkedList.prototype.unshift = function(val){

    let node = new Node(val);

    if(!this.head){
        this.head = node;
        this.tail = node;
    }else{
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    this.length++;
    return this;
}

DoublyLinkedList.prototype.insert = function(index, val){
    if(index < 0 && index > this.length){
        return undefined; //index out of bounds
    }
    let node = new Node(val);
    let current = this.head;
    let previous;
    let count = 0;

    while(count < index){
        previous = current;
        current = current.next;
        count++;
    }
    previous.next = node;
    node.prev = previous;
    current.prev = node;
    node.next = current;
    this.length++;

    return this;
}


DoublyLinkedList.prototype.getNode = function(index){
   if(index < 0 && index > this.length){
       return undefined;
   }
   let current = this.head;
   let count = 0;
   while(count < index){
    current = current.next;
    count++;
   }
   return current;

}

DoublyLinkedList.prototype.get = function(index){
    let node = this.getNode(index);
    return node ? node.val : null;
}

DoublyLinkedList.prototype.set = function(index, val){
    
}

DoublyLinkedList.prototype.pop = function(){

    if(!this.head){
        return undefined;
    }
    if(!this.head.next){
        this.head = this.head.next;
        this.length--;
        return null;
    }
    else{
        let temp = this.tail;
        let previous = this.tail.prev;
        previous.next = temp.prev = temp.next = null;
        this.tail = previous;
        this.length--;
        return temp.val;
    }
    
}

// DoublyLinkedList.prototype.shift = function(){
//     if(!this.head) return undefined;
//         let temp = this.head;
//         let later = this.head.next;
//         later.prev = null;
//         temp.next = null;
//         this.head= this.head.next;
//     this.length--;

//     return this;

// }

DoublyLinkedList.prototype.remove = function(index){


    
}

DoublyLinkedList.prototype.reverse = function(){
    
}