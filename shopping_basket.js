var items = {
  pizza: {
    name: 'Cheese',
    price: 10
  },
  milk: {
    name: 'milk',
    price: 1
  },
  pie: {
    name: 'Strawberry',
    price: 10
  }
}

var basket = {
  total: 0,
  cart: [],
  add: function(item) {
    this.cart.push(items[item]); 
  },
  remove: function(item) {
    this.cart.splice(items[item]);
  },


  displayTotal: function(items) {
    this.cart.push(items);
    var x, total = 0;
    for (x = 0; x < items.length; x++) {
        total += items[x][price];
    }
    return total();
  },


};

module.exports = basket;