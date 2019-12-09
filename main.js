const Node = (value) => {
  return {
value: value,
next: null
  }
}

const Lil = () => {
  return {
    head: null,

    values: function(value) {
      // value: value,
      // next : null
    },

    addToStart: function(value) {

    },

    addToEnd: function(value) {
    
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