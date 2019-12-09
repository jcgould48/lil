const Node = (value) => {
  return {
value: value,
next: null
  }
}

const Lil = () => {
  return {
    head: null,

    values: function() {
      const nodeArr = [];
      let current = this.head;
      while (current !== null){
        
        nodeArr.push(current.value); 
        current = current.next
      }
      
      return nodeArr;
    },

    addToStart: function(value) {
      startNode = Node(value);
      if (this.head === null){
        this.head = startNode;
      } else {
        let oldNode = this.head;
        startNode.next = oldNode
        this.head = startNode;
      }
    
    },

    addToEnd: function(value) {
      endNode = Node(value);
      if (this.head === null){
        this.head = endNode;
      }

      else if (this.head !== null){
        let current = this.head
        while(current.next){
          current = current.next
        }
        current.next= endNode
        
      } 
    },

    removeFromStart: function() {
      const old = this.head;
      this.head = old.next;
      return old.value;
    },

    removeFromEnd: function() {
      if (this.head !== null){
        let current = this.head
        while(current.next.next){
          current = current.next
        }

        let oldValue =current.next
        current.next = null;
        
        return oldValue.value
      }
      else{
        return null
      }
    },
    

    getAt: function(i) {
      let current = this.head;
      if (current === null){
        return null
      }
      else{
      newArr = this.values();
      return newArr[i];
      }
    },

    removeAt: function(i) {
      let current = this.head;
      if (current === null){
        return null
      }
      else{
        newArr = this.values();
        newArr[i] = 0;
        return newArr[i];
      }
    },
  }
}

const test = Lil();

test.addToEnd(5)
test.addToEnd(3)

test.removeFromEnd()
test.addToEnd(15)
test.removeFromEnd()
const result = test.values()
result

module.exports = {
  Lil,
  Node,
}