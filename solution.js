const { nums, words } = require("./data/data.js");



class Node {
  constructor(data){
    this.data = data;
    this.next = null; 
  }
}

class LinkedList {
  constructor(head=null){
    this.head = head; 
    this.length = 0;
  }
  insert(value){
    if(!this.head){
      this.head = new Node(value)
      this.length++
    }else{
      let current = this.head; 
      while (current.next){
        current = current.next;
      }
      current.next = new Node(value)
      this.length++
    }
    return this
  }
  size(){
    return this.length
  }
  pop(){
    if (this.length<=0) return undefined;
    let current = this.head; 
    while(current.next){
      let prev = current;
      current = current.next;
      if(!current.next){
        prev.next = null
      }
    }
  }
  shift(){
    if(!this.head) return undefined;
    if(this.head.next){
      this.head = this.head.next
    }else{
      this.head = null;
      this.head.next = null;
    }
    this.length--
  }
  delete(key){
    if(!this.head) return undefined;
    let current = this.head

    if(key === this.head.data){
      this.shift()
    }else{
      while(current.next){
         let prev = current;
         current = current.next; 
         if(current.data===key){
          prev.next = current.next
         }
      }
      this.length--;
    }
    return this
    }
  getFirst(){
    let current = this.head;
    return current;
  }
  getLast(){
    let current = this.head;
    if(!current.next) return current; 
    while(current.next){
      current = current.next;
      if(current.next === null){
        return current
      }
    }
  }
  search(key){
    let current = this.head;
    if(current.data === key) return current;
    while(current.next){
      current = current.next;
      if(current.data === key){
        return current;
      }
    }
  }
  getKth(k){
    let current = this.head;
    let index = 0;
      while(current.next){
        current = current.next;
        index++
        if(index === k){
          return current;
        }
    }
  }
  getKthToLast(k){
    let current = this.head;
    let index = this.length - k; 
    let count = 0 

      while(current.next){
        count ++
        current = current.next
        if(count === index){
          return current
        }
      }
      
    }
  isEmpty(){
    return this.length <= 0 ? true : false;
  }
  clear(){
    this.head = null;
    this.length = 0;
    return this; 
  }
  toArray(){
    let arr = [];
    if(this.length === 1){
      arr.push(this.head.data)
    }
    if(this.length <= 0){
      return undefined
    } else {
      let current = this.head 
      arr.push(current.data)
  
      while(current.next){
        current = current.next;
        arr.push(current.data)
      } 
      return arr.reverse();
    }
  }
  containsDuplicates(){
    console.log(this.length, [...new Set(this.toArray())].length)
    return this.length === [...new Set(this.toArray())].length ? false : true 
  }

  
}
  
let numList = new LinkedList()

for(let i=0;i<nums.length;i++){
    numList.insert(nums[i])
}

console.log(numList.containsDuplicates())

// const {inspect} = require("util");
//   console.log(inspect(wordList, {colors: true, depth: 12}))

module.exports = {
  Node,
  LinkedList,
};