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
      }
      else{
        let oldNode = this.head;
        startNode.next = oldNode
        this.head = startNode;
      }
      this.length ++
      return this
    },

    addToEnd: function(value) {
      endNode = Node(value);
      if (this.head === null){
        this.head = endNode;
      }
      else{}
    
    },

    removeFromStart: function() {
    
    },

    removeFromEnd: function() {
    
    },

    getAt: function(i) {
    
    },

    removeAt: function(i) {
    
    },
  }
}


module.exports = {
  Lil,
  Node,
}